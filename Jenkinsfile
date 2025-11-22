def IMAGE_REGISTRY = "facundocarballo"
def MS_NAME = "k8s-1"

pipeline {
    agent any
    
    options {
        skipDefaultCheckout()   
    }

    stages {
        stage("Setup Minikube Environment") {
            steps {
                echo "Setting up Minikube environment"
                sh 'eval $(minikube docker-env)'
            }
        }

        stage("Checkout Code") {
            steps {
                checkout scm
                echo "Code checked out for build number: ${env.BUILD_NUMBER}"
            }
        }

        stage("Build Application") {
            steps {
                echo "Building application"
                sh './scripts/build.sh'
            }
        }

        stage("Test Application") {
            steps {
                echo "Testing application"
                sh './scripts/test.sh'
            }
        }

        stage("Containerize and Publish") {
            steps {
                script {
                    def imageTag = "${env.BUILD_NUMBER}"

                    docker.build("${MS_NAME}:${imageTag}", "${MS_NAME}/.")

                    withCredentials([
                        usernamePassword(
                            credentialsId: 'docker-hub-credentials',
                            usernameVariable: 'DOCKER_USER',
                            passwordVariable: 'DOCKER_PASS'
                        )
                    ]) {
                        sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"
                        
                        // Tag and Push k8s-1 (e.g., facundodocker/k8s-1:1)
                        sh "docker tag ${MS_NAME}:${imageTag} ${IMAGE_REGISTRY}/${MS_NAME}:${imageTag}"
                        sh "docker push ${IMAGE_REGISTRY}/${MS_NAME}:${imageTag}"
                    }
                }
            }
        }
    }
}