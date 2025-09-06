import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import dayjs from "dayjs";

// Jednoduchý MVP wizard (1 obrazovka) – validace a „odeslání“ (zatím lokálně)
export default function ApplicationWizard() {
  const [jmenoZaka, setJmenoZaka] = useState("");
  const [rodneCislo, setRodneCislo] = useState("");
  const [adresa, setAdresa] = useState("");
  const [obdobi, setObdobi] = useState("2024/25 · 1. pololetí");
  const [rocnik, setRocnik] = useState("3. ročník (ZŠ)");

  const [duvod, setDuvod] = useState("");
  const [technicke, setTechnicke] = useState("");
  const [vzdelavatelJmeno, setVzdelavatelJmeno] = useState("");
  const [ucebnice, setUcebnice] = useState("");

  function validate() {
    if (!jmenoZaka || !rodneCislo || !adresa) return "Vyplňte žáka (jméno, RČ, adresa).";
    if (!duvod) return "Uveďte důvod individuálního vzdělávání.";
    if (!technicke) return "Popište technické podmínky (prostor, zařízení, BOZP).";
    if (!vzdelavatelJmeno) return "Uveďte jméno vzdělavatele (může být i učitel mimo rodiče).";
    return null;
    // upload PPP/doklad doplníme v další dávce (DocumentPicker + Storage)
  }

  function submit() {
    const err = validate();
    if (err) {
      Alert.alert("Chybí údaje", err);
      return;
    }
    // MVP: uložíme „odeslání“ do lokální proměnné a ukážeme souhrn
    const summary = {
      student: { jmenoZaka, rodneCislo, adresa, rocnik, obdobi },
      duvod,
      technicke,
      vzdelavatel: { jmeno: vzdelavatelJmeno },
      ucebnice,
      status: "odesláno",
      submittedAt: dayjs().format("YYYY-MM-DD HH:mm")
    };
    Alert.alert("Žádost odeslána (MVP)", JSON.stringify(summary, null, 2));
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Žádost o vzdělávání (MVP)</Text>

      <Text style={{ fontWeight: "600" }}>Údaje o žákovi</Text>
      <Text>Jméno a příjmení</Text>
      <TextInput value={jmenoZaka} onChangeText={setJmenoZaka} placeholder="Jan Novák"
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />
      <Text>Rodné číslo</Text>
      <TextInput value={rodneCislo} onChangeText={setRodneCislo} placeholder="010101/1234"
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />
      <Text>Adresa trvalého pobytu</Text>
      <TextInput value={adresa} onChangeText={setAdresa} placeholder="Ulice 1, Město"
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />
      <Text>Období</Text>
      <TextInput value={obdobi} onChangeText={setObdobi}
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />
      <Text>Ročník</Text>
      <TextInput value={rocnik} onChangeText={setRocnik}
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />

      <Text style={{ fontWeight: "600", marginTop: 8 }}>Důvod</Text>
      <TextInput value={duvod} onChangeText={setDuvod} placeholder="zdravotní / sport / nadání…"
        multiline style={{ borderWidth: 1, padding: 10, borderRadius: 8, minHeight: 70 }} />

      <Text style={{ fontWeight: "600" }}>Technické podmínky</Text>
      <TextInput value={technicke} onChangeText={setTechnicke} placeholder="místo, zařízení, BOZP…"
        multiline style={{ borderWidth: 1, padding: 10, borderRadius: 8, minHeight: 70 }} />

      <Text style={{ fontWeight: "600" }}>Vzdělavatel</Text>
      <Text>Jméno (doklad přidáme v další verzi)</Text>
      <TextInput value={vzdelavatelJmeno} onChangeText={setVzdelavatelJmeno} placeholder="Mgr. …"
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }} />

      <Text style={{ fontWeight: "600" }}>Učebnice (volitelné)</Text>
      <TextInput value={ucebnice} onChangeText={setUcebnice} placeholder="Seznam učebnic / materiálů"
        multiline style={{ borderWidth: 1, padding: 10, borderRadius: 8, minHeight: 60 }} />

      <View style={{ height: 8 }} />
      <Button title="Odeslat žádost" onPress={submit} />
      <Text style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
        Po doplnění backendu se žádost odešle řediteli školy a bude sledovat stav (odesláno / schváleno / zamítnuto).
      </Text>
    </ScrollView>
  );
}
