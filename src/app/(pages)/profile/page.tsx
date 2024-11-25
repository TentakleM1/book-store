"use client";
import { Button } from "@/components/button/button";
import Image from "next/image";
import user from "../../../../public/test/user.png";
import photo from "../../../../public/imgs/photo.png";

export default function Profile() {
    return (
      <section>
        <div>
          <Image src={user} alt="user" />
          <Button src={photo}/>
        </div>
        <div>
          <div>
            <h2>Personal information</h2>
          </div>
        </div>
      </section>
    );
  }