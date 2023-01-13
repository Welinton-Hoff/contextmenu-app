import { useState } from "react";
import { Text, View } from "react-native";

import { Tags } from "../../components/Tags";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function Home() {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  function handleAddTag() {
    setNewTag("");
    setTags((prevState) => [...prevState, newTag]);
  }

  function handleRemoveTag(tagDeleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Nova tag" onChangeText={setNewTag} value={newTag} />
        <Button onPress={handleAddTag} />
      </View>

      <Text style={styles.title}>Tags</Text>

      <Tags data={tags} onRemove={handleRemoveTag} />
    </View>
  );
}
