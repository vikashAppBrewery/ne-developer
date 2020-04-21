
pipeline {
  agent any
  stages {
    stage('Docker Build') {
      steps {
        sh "docker build -t niteshldd/ne-clothgram-frontend:latest ."
      }
    }
    stage('Docker Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh "docker push niteshldd/ne-clothgram-frontend:latest"
        }
      }
    }
    stage('Apply Kubernetes Files') {
      steps {
          withKubeConfig([credentialsId: 'kubeconfig', serverUrl: 'https://api.kube.rukjaana.com']) {
          sh 'kubectl get all'
          sh 'kubectl rollout restart deployment/ne-clothgram-production-frontend -n production'
        }
      }
  }
}
}