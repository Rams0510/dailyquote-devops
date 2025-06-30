pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t dailyquote ./dailyquote'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker rm -f dailyquote || true
                    docker run -d -p 8080:80 --name dailyquote dailyquote
                '''
            }
        }
    }
}
