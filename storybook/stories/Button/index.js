import React from "react";
import { storiesOf, addDecorator } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Button } from "../../../components/Button";
import { BuffetView } from "../decorators";

storiesOf("Button", module)
  .addDecorator(BuffetView)
  .add("Button 1", () => (
    <Button onPress={action("tapped-default")}>Press!</Button>
  ))
  .add("Button 2 ", () => (
    <Button onPress={action("tapped-outline")} outline>
      Press 2!
    </Button>
  ));
