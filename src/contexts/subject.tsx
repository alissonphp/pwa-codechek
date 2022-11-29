import { createContext, useContext, useState } from "react";

export interface Subject {
  id: string
  name: string
}

interface Props {
  subjects: Subject[]
}

const SubjectContext = createContext<Props>({} as Props)

export function SubjectProvider({ children }: { children: JSX.Element }){
  const [ subjects ] = useState<Subject[]>([
    { id: '123', name: 'Internet of Things'},
    { id: '124', name: 'DNA Empreendedor'},
  ])

  return (
    <SubjectContext.Provider
      value={{ subjects }}
    >
      { children }
    </SubjectContext.Provider>
  )
}

export const useSubject = () => useContext(SubjectContext)