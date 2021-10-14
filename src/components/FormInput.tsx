import clsx from 'clsx'
import { FieldPath, useFormContext } from 'react-hook-form'
import type { Form } from '../types/Form'
import { v4 as uuidv4 } from 'uuid'
import { useMemo } from 'react'

type FormInputProps = {
  name: FieldPath<Form>
  label: string
}

export function FormInput({ name, label }: FormInputProps) {
  const { register } = useFormContext()
  const id = useMemo(() => uuidv4(), [])
  return (
    <div className={clsx('input-container')}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(name, { valueAsNumber: true })} />
    </div>
  )
}
