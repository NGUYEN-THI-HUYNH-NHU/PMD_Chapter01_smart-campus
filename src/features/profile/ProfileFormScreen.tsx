import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ProfileFormValues } from "./validation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { FormField } from "../../components/FormField";
import { colors, radius, spacing, typography } from "../../theme";
import PrimaryButton from "../../components/PrimaryButton";

const ProfileFormScreen = () => {
  const [values, setValues] = useState<ProfileFormValues>({
    fullName: "",
    studentId: "",
    email: "",
    program: "",
    bio: "",
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof ProfileFormValues, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ProfileFormValues, text: string) => {
    setValues((prev) => ({ ...prev, [field]: text }));
  };

  const handleBlur = (field: keyof ProfileFormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = () => {
    setSubmitted(true);

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert("Successful", "Updated profile successfully!");
    }, 1500);
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Header
            title="Profile"
            subtitle="Update your identification information to use automated services on Smart Campus"
          />
          <View style={styles.form}>
            <FormField
              label="Fullname"
              value={values.fullName}
              onChangeText={(v) => handleChange("fullName", v)}
              onBlur={() => handleBlur("fullName")}
              inputProps={{
                placeholder: "e.g. Nguyễn Thị Huỳnh Như",
                autoComplete: "name",
                returnKeyType: "next",
              }}
            />
            <FormField
              label="Student ID"
              value={values.studentId}
              onChangeText={(v) => handleChange("studentId", v)}
              onBlur={() => handleBlur("studentId")}
              inputProps={{
                placeholder: "23638921",
                autoCapitalize: "characters",
                returnKeyType: "next",
              }}
            />
            <FormField
              label="School email"
              value={values.email}
              onChangeText={(v) => handleChange("email", v)}
              onBlur={() => handleBlur("email")}
              inputProps={{
                placeholder: "sid.name@school.edu.vn",
                keyboardType: "email-address",
                autoComplete: "email",
                returnKeyType: "next",
              }}
            />
            <FormField
              label="Major"
              value={values.program}
              onChangeText={(v) => handleChange("program", v)}
              onBlur={() => handleBlur("program")}
              inputProps={{
                placeholder: "Software Engineering",
                returnKeyType: "next",
              }}
            />
            <View style={styles.bioWrapper}>
              <FormField
                label="Introduction (Max. 240 characters)"
                value={values.bio}
                onChangeText={(v) => handleChange("bio", v)}
                onBlur={() => handleBlur("bio")}
                inputProps={{
                  placeholder:
                    "Briefly share your learning goals and interests...",
                  multiline: true,
                  numberOfLines: 4,
                  maxLength: 240,
                  style: styles.bioInput,
                }}
              />
              <Text
                style={[
                  styles.counter,
                  values.bio.length > 240 && { color: colors.danger },
                ]}
              >
                {values.bio.length}/240
              </Text>
            </View>
          </View>

          <PrimaryButton
            title="Save changes"
            loading={isSubmitting}
            onPress={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default ProfileFormScreen;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    paddingVertical: 46,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  bioWrapper: {
    position: "relative",
    width: "100%",
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    padding: spacing.md,
    backgroundColor: colors.surface,
    ...typography.body,
    color: colors.text,
  },
  counter: {
    alignSelf: "flex-end",
    fontSize: 11,
    color: colors.muted,
    fontWeight: 600,
    marginTop: -spacing.xs,
    marginBottom: spacing.md,
  },
  form: {
    marginTop: 36,
  },
});
