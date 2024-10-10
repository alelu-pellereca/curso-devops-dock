pipeline {
    agent any
 
    environment {
        FLY_API_TOKEN=credentials('JENKINS_ALEJANDRA')
    }
 
    tools {
        nodejs "nodejs-18"
    }
 
    triggers{
        githubPush()
    }
    
    stages {
 
        stage('Install Fly.io') {
            steps {
                echo 'Installing Fly.io...'
                withCredentials([string(credentialsId: 'JENKINS_ALEJANDRA', variable: 'JENKINS_ALEJANDRA')]) {
                    sh '''
                        # Instalar flyctl si no está ya disponible
                        curl -L https://fly.io/install.sh | sh
                        export FLYCTL_INSTALL="/var/jenkins_home/.fly"
                        export PATH="$FLYCTL_INSTALL/bin:$PATH"
                        # Autenticarse con Fly.io
                        fly auth token $JENKINS_ALEJANDRA
                    '''
                }
            }
        }
        
        stage('Install dependencies'){
            steps {
                echo 'Installing...'
                sh 'npm install'
            }
        }
        stage('Run test'){
            steps{
                echo 'Running test'
                sh 'npm run test'
            }
        }
        stage('Pintar credencial'){
            steps{
                echo 'Hola esta es mi credencial: $JENKINS_ALEJANDRA'
            }
        }
 
        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying the project to Fly.io...'
                sh '/var/jenkins_home/.fly/bin/flyctl deploy --app curso-devops-jenkins-rough-log-9484 --remote-only'
            }
        }
    }
}