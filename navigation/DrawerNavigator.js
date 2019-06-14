import React from "react";
import { View, Text, Platform, Dimensions } from "react-native";

import { createDrawerNavigator, createAppContainer } from "react-navigation";
import AllPatients from "../screens/AllPatients";
import AddPatient from "../screens/AddPatient";

const WIDTH = Dimensions.get("screen").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83
};

const DrawerNavigator = createDrawerNavigator(
  {
    "All Patients": {
      screen: AllPatients
    },
    "Add Patient": {
      screen: AddPatient
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
