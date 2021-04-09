import type { GrayMatterFile } from "gray-matter"
import React from "react"
import PhotoAndInformation from "../components/landing/PhotoAndInformation"
import { getBySlug } from "../lib/landingParts"
import markdownToHtml from "../lib/markdownToHtml"

interface HomeProps {
  jose: GrayMatterFile<string>
}

function Curriculum({ person }: { person: GrayMatterFile<string> }) {
  return <div className="flex lg:flex-row flex-col align-middle">
    <div className="
    lg:w-1/3
    lg:m-8
    m-4
    ">
      <div className="
      bg-blue-900
      rounded-xl
      shadow-xl
      lg:min-h-almost-screen
      ">
        <PhotoAndInformation data={person.data} />
      </div>
    </div>
    <div className="lg:w-2/3 lg:m-8 m-4">
      <div className="m-auto lg:min-h-almost-screen flex flex-col justify-center px-4">
        <div className="m-auto">
          <div className="text-6xl font-montserrat text-left font-bold">
            {person.data.title}
          </div>
          <div className="text-xl font-montserrat text-left">
            {person.data.subtitle}
          </div>
        
          <button className="
          bg-blue-900
          rounded-md
          shadow
          font-sans
          px-4
          py-2
          my-4
          text-white
          font-bold
          hover:bg-blue-800
          ">
            Let's talk
          </button>
        </div>
      </div>
      <div
      className="prose mx-auto my-8"
      dangerouslySetInnerHTML={{ __html: person.content }}
      />
    </div>
  </div>
}
export default function Homepage(props: HomeProps) {
  console.log(props)
  return <div className="container mx-auto">
    <Curriculum person={props.jose} />
    
  </div>
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  async function htmlPart(name: string): Promise<GrayMatterFile<string>> {
    const post = getBySlug(name)
    const content = await markdownToHtml(post.content || '')
    return {
      ...post,
      content,
      orig: ""
    }
  }

  return {
    props: {
      jose: (await htmlPart("jose"))
    },
  }
}