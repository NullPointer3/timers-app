import React, { useState } from 'react'

interface Props {
  id?: string
  title?: string
  project?: string
  onFormSubmit: (timer: {
    id?: string
    title: string, 
    project: string
    }) => void
  onFormClose: () => void
}

interface InputFields {
  title: string
  project: string
}

type OnInpuChange = (evt: React.ChangeEvent<HTMLInputElement>) => void

const TimerForm = (props: Props) => {
const [ inputFields, setInputFields] = useState<InputFields>({
  title: props.title || "",
  project: props.project || ""
})

  const onInputChange: OnInpuChange = (evt) => {
    const { name, value } = evt.target
    setInputFields(prev => ({
      ...prev,
      [name]: value
    }))  
  }

  const handleSubmit = () => {
    props.onFormSubmit({
      id: props.id,
      title: inputFields.title,
      project: inputFields.project
    })
  }

  const submitText = props.title ? "Update" : "Create"
  return (
    <div 
      className="grid border-[1px] border-gray-400 rounded-md h-[250px] w-[300px] shadow-sm">
      <div 
        className="grid"
      >
        <div 
          className="grid pt-2 px-4"
        >
          <label 
            className="text-[16px]"
          >
            Title
          </label>
          <input
            className="text-[16px] px-2 py-1 outline-none border-[1px] border-gray-400 rounded-md" 
            placeholder="title" 
            type="text"
            name='title' 
            value={inputFields.title}
            onChange={onInputChange}
          />
        </div>
        <div className="grid pt-2 px-4"> 
          <label className="text-[16px]">Project</label>
          <input
            className="text-[16px] px-2 py-1 outline-none border-[1px] border-gray-400 rounded-md" 
            type="text"
            name='project' 
            placeholder="project" 
            value={inputFields.project}
            onChange={onInputChange}
          />
        </div>
        <div 
          className="flex justify-center mt-4 w-full">
          <div 
            className="w-full border border-blue-400 flex 
            items-center justify-center rounded-bl-md" 
          >
            <button
              className="" 
              type="button"
              onClick={handleSubmit}
            >
            {submitText}
            </button>
          </div>
          <div 
            className="w-full border border-red-500 border-l-blue-500 
            flex justify-center items-center rounded-br-md">
            <button 
              type="button"
              onClick={props.onFormClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerForm