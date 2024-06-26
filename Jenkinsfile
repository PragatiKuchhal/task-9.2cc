pipeline {
    agent any

    environment {
        DIRECTORY_PATH = "https://github.com/PragatiKuchhal/Task-3.2C.git"
        TESTING_ENVIRONMENT = "TASK 6.2C"
        PRODUCTION_ENVIRONMENT = "Pragati"
    }

    stages {
        stage('Build') {
            steps {
                echo "Fetching the source code from the directory path specified by the environment variable: ${env.DIRECTORY_PATH}"
                echo "Compiling the code and generating any necessary artifacts, updated"
                echo "updated new commit"
            }
        }
        stage('Test') {
            steps {
                echo "Running unit tests"
                echo "Running integration tests"
                echo "updated new commit"
            }
            post {
                success {
                    emailext  subject: 'Unit Test Status - Success', 
                              body: 'Unit Test has been completed successfully.', 
                              to: "pragati4823.be22@chitkara.edu.in",
                              attachLog: true
                }
                failure {
                    emailext subject: 'Unit Test Status - Failure', 
                              body: 'Unit Test has failed.', 
                              to: "pragati4823.be22@chitkara.edu.in",
                              attachLog: true
                }
            }
        }
        stage('Code Quality Check') {
            steps {
                echo "Checking the quality of the code"
            }
        }
        stage('Security Scan') {
            steps {
                echo "Performing security scan on the code"
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo "Deploying the application to a testing environment specified by the environment variable: ${env.TESTING_ENVIRONMENT}"
            }
            post {
                success {
                    emailext  subject: 'Security Scan Status - Success', 
                              body: 'Security Scan has been completed successfully.', 
                              to: "pragati4823.be22@chitkara.edu.in",
                              attachLog: true
                }
                failure {
                    emailext subject: 'Security Scan Status - Failure', 
                              body: 'Security Scan has failed.', 
                              to: "pragati4823.be22@chitkara.edu.in",
                              attachLog: true
                }
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo "Running integration tests on the staging environment"
                
            }
        }
        stage('Approval') {
            steps {
                script {
                    echo "Pausing for manual approval..."
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                echo "Deploying the code to the production environment "
               
            }
        }
    }
}
