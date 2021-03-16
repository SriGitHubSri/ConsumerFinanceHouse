pipeline {
  environment {
    registry = "steel-wharf-305823/cfh"
    registryCredential = 'kuberneteslogon'
    dockerImage = ''
      PROJECT_ID = 'steel-wharf-305823'
        CLUSTER_NAME = 'cluster-1'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'kuberneteslogon'

  }
  agent any
 
 stages {
   
    stage('Build Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
	
    stage('Push Image') {
      steps{
        script {
            docker.withRegistry( 'https://gcr.io', "gcr:kuberneteslogon" ) {
            dockerImage.push()
          }
        }
      }
    }
    
  /* stage('Run Container') {
      steps{
        sh """docker run -itd --name myapp -p 3000:3000 $registry:$BUILD_NUMBER	
	"""
      }
    }*/
    stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/cfh:latest/cfh:${env.BUILD_ID}/g' manifest/deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'manifest/', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
                 echo "Deployment succesful"
	    }
        }
    /*stage('Cleanup') {
      steps{
        cleanWs()
      }
    }*/
    
    
    
    /* stage('Remove Image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    */
  }
   post { 
        always { 
            cleanWs()
        }
    }

}
