import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsaap" />
          <Textarea name="bio" label="Biologia"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject"
            label="Matéria"
            options={[
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Artes', label: 'Artes' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />
          
          <Input name="avatar" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">+ Novo horário</button>
            </legend>

            <div className="schedule-item">
              <Select
                name="week_day"
                label="Dia da semana"
                options={[
                  { value: '0', label: 'Domingo'},
                  { value: '1', label: 'Segunda-feira'},
                  { value: '2', label: 'Terça-feira'},
                  { value: '3', label: 'Quarta-feira'},
                  { value: '4', label: 'Quinta-feira'},
                  { value: '5', label: 'Sexta-feira'},
                  { value: '6', label: 'sábado'},
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
        </fieldset>    

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os campos
          </p>
          <button type="button">Salvar</button>
        </footer>

      </main>
    </div>
  );
}

export default TeacherForm;