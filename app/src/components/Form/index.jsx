/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Element } from 'react-scroll';
import axios from '../../utils/axios';
import Title from '../Title';
import StyleForm from './styled';
import StyleButton from '../Button';

const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios.post('/form', data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyleForm>
      <Title
        level="h1"
      >
        Télécharger le livre blanc !
      </Title>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <Element name="form" />
        <label htmlFor="name">
          Votre nom*
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name?.type === 'required' && <span className="error">Votre nom est requis</span>}
        </label>
        <label htmlFor="organisation">
          Votre organisation*
          <input
            id="organisation"
            type="text"
            {...register('organisation', { required: true })}
          />
          {errors.organisation?.type === 'required' && <span className="error">Votre organisation est requise</span>}
        </label>
        <label htmlFor="jobTitle">
          Votre profession*
          <input
            id="jobTitle"
            type="text"
            {...register('job_title', { required: true })}
          />
          {errors.job_title?.type === 'required' && <span className="error">Votre profession est requise</span>}
        </label>
        <label htmlFor="email">
          Votre adresse e-mail*
          <input
            id="email"
            type="email"
            {...register('email_address', {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email_address?.type === 'required' && <span className="error">Votre e-mail est requis</span>}
          {errors.email_address?.type === 'pattern' && <span className="error">Votre e-mail est mal formattee</span>}
        </label>

        <p>
          {'Vous voulez tester Wooclap '}
          <span>
            gratuitement
          </span>
          {' ? C’est par '}
          <a href="https://www.wooclap.com/fr/" target="_blank" rel="noreferrer">ici</a>
          {' ! '}
        </p>

        <StyleButton type="submit">
          Télécharger
        </StyleButton>
      </form>
    </StyleForm>
  );
};

export default Form;
