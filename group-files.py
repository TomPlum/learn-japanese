#!/usr/bin/python

import os
import shutil
import fileinput

tests = []
styles = []
tsxFiles = []
tsFiles = []

for root, dirs, files in os.walk("./src"):
    path = root.split(os.sep)
    for file in files:
        fullFilePath = os.path.join(root, file)

        if '.test.' in file:
            tests.append(fullFilePath)

        if '.module.scss' in file:
            styles.append(fullFilePath)

        if '.tsx' in file:
            tsxFiles.append(fullFilePath)

        if file.endswith('.ts'):
            tsFiles.append(fullFilePath)

print('Found Test Files\n', tests, '\n')
print('Found SASS Module Files\n', styles, '\n')

for root, dirs, files in os.walk("./src/components"):
    path = root.split(os.sep)
    print((len(path) - 1) * '---', os.path.basename(root))

    for file in files:
        isTs = file.endswith('.ts')
        isTsx = file.endswith('.tsx')
        isTest = ".test." in file

        fileFullPath = os.path.join(root, file)

        if isTs or isTsx and not isTest:
            print(len(path) * '---', file)
            rawFileName = file.removesuffix('.ts' if isTs else '.tsx')
            filesToMove = []
            indent = len(path) * '------'

            # Find SAAS Module File
            testNameCandidate = rawFileName + ('.test.ts' if isTs else '.test.tsx')
            foundTests = [testFile for testFile in tests if testFile.endswith(f'/{testNameCandidate}')]
            if len(foundTests) > 0:
                print(indent, 'Found a test file for ' + fileFullPath + ' called ' + foundTests[0])
                filesToMove.append(foundTests[0])

            # Find Test Files
            stylesNameCandidate = rawFileName + '.module.scss'
            foundStyles = [styleFile for styleFile in styles if styleFile.endswith(f'/{stylesNameCandidate}')]
            if len(foundStyles) > 0:
                print(indent, 'Found a SASS module for ' + fileFullPath + ' called ' + foundStyles[0])
                filesToMove.append(foundStyles[0])

            # If files need moving, lets do it
            if len(filesToMove) > 0:
                pathComponents = os.path.normpath(fileFullPath).split(os.path.sep)
                del pathComponents[-1]
                parentFolder = '/'.join(pathComponents)
                print(indent, 'Creating new directory in ' + parentFolder + ' called ' + rawFileName)

                # Create new subdirectory named after the component to store all relevant files in
                newDirectory = parentFolder + '/' + rawFileName
                os.mkdir(newDirectory)

                # Add the actual implementation file into the folder too
                filesToMove.append(fileFullPath)

                # Move any candidate files like test suites and styling files
                for fileToMove in filesToMove:
                    print(indent, 'Moving ' + fileToMove + ' to ' + newDirectory)
                    shutil.move(fileToMove, newDirectory)

                # Update the component implementation files imports
                for line in fileinput.input(f'{newDirectory}/{file}', inplace=1):
                    if line.startswith('import') and stylesNameCandidate in line:
                        # Updated the SASS module to its relative to the same dir
                        print(line.replace(stylesNameCandidate, f'{rawFileName}/{stylesNameCandidate}'))
                    elif 'from' in line and '../' in line:
                        # Bump relative imports in the implementation file that was moved to the new sub folder
                        print(line.replace('../', '../../', 1).rstrip())
                    elif 'from' in line and './' in line:
                        # Bump relative imports in the implementation file that was moved to the new sub folder
                        # These are imports for files that were in the same dir originally and start with ./
                        print(line.replace('./', './../', 1).rstrip())
                    else:
                        print(line.rstrip())

                # Update the test suite files imports
                if len(foundTests) > 0:
                    for line in fileinput.input(f'{newDirectory}/{foundTests[0].split(os.sep)[-1]}', inplace=1):
                        if line.startswith('import') and f'/{rawFileName}' in line:
                            # Update the implementation under tests import to be relative to current dir
                            # This is for imports that are on one line
                            lhs = line.split('from ')[0]
                            updatedImport = f'{lhs} from "./{rawFileName}"'
                            print(updatedImport)
                        elif line.startswith('import') and '../' in line:
                            # Bump relative imports in the test file that was moved to the new sub folder
                            print(line.replace('../', '../../', 1).rstrip())
                        else:
                            print(line.rstrip())

                # Write an index.ts file to the new folder
                indexContents = 'export { default } from \'./' + rawFileName + '\'\nexport * from \'./' + rawFileName + '\''
                print(indent, 'Creating index.ts in new folder with contents: ', indexContents)
                index = open(newDirectory + '/index.ts', 'x')
                index.write(indexContents)
