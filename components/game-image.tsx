import Image, { type ImageProps } from "next/image";

type GameImageProps = Omit<ImageProps, "unoptimized">;

export function GameImage({ loading = "eager", ...props }: GameImageProps) {
  return <Image {...props} loading={loading} unoptimized />;
}
