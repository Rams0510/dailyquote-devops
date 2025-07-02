pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Rams0510/dailyquote-devops.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Simulating build step..."'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Simulating deployment..."'
            }
        }
    }
}
