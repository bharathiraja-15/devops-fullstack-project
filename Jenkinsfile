pipeline {

 agent any

 stages {

  stage('Clone Repo'){
   steps{
    git 'https://github.com/yourrepo/devops-project.git'
   }
  }

  stage('Build Docker Images'){
   steps{
    sh 'docker build -t frontend -f docker/frontend.Dockerfile .'
    sh 'docker build -t backend -f docker/backend.Dockerfile .'
   }
  }

  stage('Push Image'){
   steps{
    sh 'docker push frontend'
    sh 'docker push backend'
   }
  }

  stage('Terraform Deploy'){
   steps{
    sh 'cd terraform && terraform init'
    sh 'cd terraform && terraform apply -auto-approve'
   }
  }

  stage('Deploy to Kubernetes'){
   steps{
    sh 'kubectl apply -f k8s/'
   }
  }

 }

}