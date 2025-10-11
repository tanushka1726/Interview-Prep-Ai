import React from 'react'
import { LuCopy, LuCheck, LuCode } from 'react-icons/lu';
import remarkGfm from "remark-gfm";
import ReactMarkDown from "react-markdown";
import{ Prism as SyntaxHighLighter} from "react-syntax-highlighter";
import {oneLight} from "react-syntax-highlighter/dist/esm/styles/prism";


const AIResponsePreview = ({content}) => {
    if(!content)
  return (
    <div>
      response
    </div>
  )
}

export default AIResponsePreview
