import { Image } from "react-native";

interface AvatarProps {
  uri: string;
  name: string;
  size?: number;
}

const Avatar = ({ uri, name, size }: AvatarProps) => {
  return (
    <Image
      source={{ uri }}
      style={{ width: size, height: size, borderRadius: size ? size / 2 : 0 }}
      accessibilityLabel={`${name}'s profile photo`}
    />
  );
};

export default Avatar;
