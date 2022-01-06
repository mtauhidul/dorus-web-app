import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Add.module.scss';

export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form id={styles.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Post Title'
        {...register('Post Title', { required: true, maxLength: 80 })}
      />
      <textarea
        {...register('Post Description', { required: true, maxLength: 160 })}
      />
      <input
        type='text'
        placeholder='Second Title'
        {...register('Second Title', { required: true, maxLength: 80 })}
      />
      <textarea
        {...register('Second Description', { required: true, maxLength: 200 })}
      />
      <input
        type='text'
        placeholder='Section Title'
        {...register('Section Title', { required: true, maxLength: 80 })}
      />
      <input
        type='text'
        placeholder='Third Title'
        {...register('Third Title', { required: true, maxLength: 80 })}
      />
      <textarea
        {...register('Third Description', { required: true, maxLength: 200 })}
      />
      <input
        type='text'
        placeholder='Fourth Title'
        {...register('Fourth Title', { required: true, maxLength: 50 })}
      />
      <textarea
        {...register('Fourth Description', { required: true, maxLength: 200 })}
      />
      <input
        type='text'
        placeholder='Fifth Title'
        {...register('Fifth Title', { required: true, maxLength: 80 })}
      />
      <textarea
        {...register('Fifth Description', { required: true, maxLength: 200 })}
      />

      <input type='submit' />
    </form>
  );
}
