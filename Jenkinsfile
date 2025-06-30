pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/yourusername/dailyquote.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t dailyquote .'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker run -d -p 8080:80 --name dailyquote dailyquote'
      }
    }
  }
}
