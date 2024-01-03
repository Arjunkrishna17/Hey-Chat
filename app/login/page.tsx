import Image from "next/image";

import PrimaryButton from "../components/common/PrimaryButton";
import Input from "../components/common/Input";

const login = () => {
  return (
    <div className="grow flex w-full h-full justify-center items-center bg-gray-200 p-10">
      <div className="flex p-5 border w-[35rem] h-full rounded-lg bg-white">
        <div className="flex flex-col w-full items-center relative">
          <Image
            src="/LoginGraphics.svg"
            width={400}
            height={400}
            alt="login"
          />
          <div className="text-xs absolute top-[22rem]">
            <a href="https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957136.htm#query=login&position=3&from_view=keyword&track=sph&uuid=dba784e1-0c20-443a-bf75-f92d673ef4c2">
              Image by storyset
            </a>
            on Freepik
          </div>

          <div className="flex flex-col justify-center space-y-5">
            <Input placeholder="Enter your email" />
            <PrimaryButton name="Sign In" width="full" callback={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
