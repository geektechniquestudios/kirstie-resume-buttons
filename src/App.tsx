import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa"
import { LinkButton } from "./LinkButton"
import { VscGithub } from "react-icons/vsc"
import { LiaGrav } from "react-icons/lia"

function App() {
  const color = "#90a1b9"
  return (
    <div className="h-screen w-screen grid place-content-center">
      <div className="flex flex-col gap-2">
        <LinkButton
          name="LINKEDIN"
          logo={<FaLinkedinIn color={color} size="25" />}
        />
        <LinkButton
          name="GITHUB"
          logo={<VscGithub color={color} size="44" />}
        />
        <LinkButton name="WEBSITE" logo={<LiaGrav color={color} size="54" />} />
        <LinkButton
          name="STACKOVERFLOW"
          logo={<FaStackOverflow color={color} size="28" />}
        />
      </div>
    </div>
  )
}

export default App
