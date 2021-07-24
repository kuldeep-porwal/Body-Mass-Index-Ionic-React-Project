import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BmiCalculator from "../components/BmiCalculator";
import "./Home.css";

const currentYear = new Date().getFullYear();

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">
            <IonText>
              <h1>BMI Calculator</h1>
            </IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BmiCalculator></BmiCalculator>
      </IonContent>
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">
            <IonText>
              <h3>&copy;Rural India - {currentYear}</h3>
            </IonText>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
