import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useState } from "react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
const BmiCalculator: React.FC = () => {
  const [weightInput, setWeightInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [segmentValue, setSegmentValue] = useState("kg/cm");
  const [bmiValue, setBmiValue] = useState("");
  const [weightInputLabel, setWeightInputLabel] = useState("Weight (kg)");
  const [heightInputLabel, setHeightInputLabel] = useState("Height (cm)");
  const [weightInputLabelPlaceHolder, setWeightInputLabelPlaceHolder] =
    useState("Weight (kg) Ex-: 70");
  const [heightInputLabelPlaceHolder, setHeightInputLabelPlaceHolder] =
    useState("Height (cm) Ex-: 170");

  const calculateBmiValue = () => {
    var bminumber = 0;
    if (segmentValue === "kg/cm") {
      bminumber = +weightInput / ((+heightInput * +heightInput) / 10000);
    } else if (segmentValue === "lb/in") {
      bminumber = (+weightInput / (+heightInput * +heightInput)) * 703;
    }

    if (isNaN(bminumber)) return;

    setBmiValue(`${bminumber}`);
  };

  const onSegmentChange = (segment: any) => {
    setSegmentValue(segment);
    if (segment === "kg/cm") {
      setWeightInputLabel("Weight (kg)");
      setHeightInputLabel("Height (cm)");
      setHeightInputLabelPlaceHolder("Height (cm) Ex-: 170");
      setWeightInputLabelPlaceHolder("Weight (kg) Ex-: 70");
    } else if (segment === "lb/in") {
      setWeightInputLabel("Weight (lb)");
      setHeightInputLabel("Height (in)");
      setHeightInputLabelPlaceHolder("Height (in) Ex-: 65");
      setWeightInputLabelPlaceHolder("Weight (lb) Ex-: 150");
    }
    resetInput();
  };

  const resetInput = () => {
    setWeightInput("");
    setHeightInput("");
    setBmiValue("");
  };

  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonSegment
              value={segmentValue}
              onIonChange={(e) => onSegmentChange(e.detail.value)}
            >
              <IonSegmentButton value="kg/cm">
                <IonLabel>kg/cm Unit</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="lb/in">
                <IonLabel>lb/in Unit</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem class="ion-padding-top">
              <IonLabel position="floating">{heightInputLabel}</IonLabel>
              <IonInput
                value={heightInput}
                placeholder={heightInputLabelPlaceHolder}
                onIonChange={(e: any) => {
                  console.log("e.detail.value", e.detail.value);
                  setHeightInput(e.detail.value);
                }}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem class="ion-padding-top">
              <IonLabel position="floating">{weightInputLabel}</IonLabel>
              <IonInput
                placeholder={weightInputLabelPlaceHolder}
                value={weightInput}
                onIonChange={(e: any) => {
                  setWeightInput(e.detail.value);
                }}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow class="ion-padding-top">
          <IonCol class="ion-text-center">
            <IonButton onIonFocus={() => calculateBmiValue()}>
              <IonIcon slot="start" icon={calculatorOutline} />
              Calculate
            </IonButton>
          </IonCol>
          <IonCol class="ion-text-center">
            <IonButton onIonFocus={() => resetInput()}>
              <IonIcon slot="start" icon={refreshOutline} />
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard class="">
              <IonCardHeader color="primary">
                <IonCardTitle class="ion-text-center">BMI Value</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle class="ion-text-center ion-padding">
                  {bmiValue}
                </IonCardTitle>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default BmiCalculator;
