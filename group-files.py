#!/usr/bin/python

import os

tests = []
for root, dirs, files in os.walk("./src/tests"):
    path = root.split(os.sep)
    for file in files:
        if '.test.' in file:
            tests.append(os.path.join(root, file))

print('Found Test Files\n', tests, '\n')

styles = []
for root, dirs, files in os.walk("./src/styles/sass/components"):
    path = root.split(os.sep)
    for file in files:
        if '.module.scss' in file:
            styles.append(os.path.join(root, file))
print('Found SASS Module Files\n', styles, '\n')

for root, dirs, files in os.walk("./src"):
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

            testNameCandidate = rawFileName + '.test.ts' if isTs else '.test.tsx'
            foundTests = [testFile for testFile in tests if testFile.endswith(testNameCandidate)]
            if len(foundTests) > 0:
                print(indent, 'Found a test file for ' + fileFullPath + ' called ' + foundTests[0])
                filesToMove.append(foundTests[0])

            stylesNameCandidate = rawFileName + '.module.scss'
            foundStyles = [styleFile for styleFile in styles if styleFile.endswith(stylesNameCandidate)]
            if len(foundStyles) > 0:
                print(indent, 'Found a SASS module for ' + fileFullPath + ' called ' + foundStyles[0])
                filesToMove.append(foundStyles[0])

            if len(filesToMove) > 0:
                pathComponents = os.path.normpath(fileFullPath).split(os.path.sep)
                del pathComponents[-1]
                parentFolder = '/'.join(pathComponents)
                print(indent, 'Creating new directory in ' + parentFolder + ' called ' + rawFileName)

                newDirectory = parentFolder + '/' + rawFileName

                for fileToMove in filesToMove:
                    print(indent, 'Moving ' + fileToMove + ' to ' + newDirectory)

                indexContents = 'export { default } from \'./' + file + '\''
                print(indent, 'Creating index.ts in new folder with contents: ', indexContents)

