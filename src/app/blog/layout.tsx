import Navbar from "@/components/Navbar";

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      {props.children}
    </>
  );
}