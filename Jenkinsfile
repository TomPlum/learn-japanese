pipeline {
    agent any

    stages {
        stage('Initialise NPM') {
            steps {
                sh 'npm i'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'react-app-rewired test --coverage'
            }
        }
        stage('Acceptance Test') {
            steps {
                sh 'cypress open --env'
            }
        }
    }
}
