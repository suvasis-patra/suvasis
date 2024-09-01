import ProfilePic from "@/components/profile-pic";
import Intro from "@/components/intro";

export default function Hero() {
  return (
    <section className="flex text-center max-w-[50rem] flex-col gap-2 md:gap-5 items-center">
      <ProfilePic />
      <Intro />
    </section>
  );
}
