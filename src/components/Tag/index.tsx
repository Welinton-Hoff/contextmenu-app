import { Text } from "react-native";
import { HoldItem } from "react-native-hold-menu";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

import { styles } from "./styles";
import { MenuItemProps } from "react-native-hold-menu/lib/typescript/components/menu/types";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  const holdItemConfig: MenuItemProps[] = [
    { text: title, isTitle: true },
    {
      icon: "trash",
      text: "Apagar",
      isDestructive: true,
      onPress: () => onRemove(),
    },
  ];

  return (
    <Animated.View
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.container}
    >
      <HoldItem items={holdItemConfig}>
        <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </Animated.View>
  );
}
