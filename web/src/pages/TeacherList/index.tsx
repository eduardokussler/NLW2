import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

interface Teacher {
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
  id: number;
}

function TeacherList() {

  const [ teachers, setTeachers ] = useState([]);

  const [ subject, setSubject ] = useState('');
  const [ weekDay, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');
  

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    
    
    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time
      }
    });

    setTeachers(response.data);
  }


  return ( 
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select name="subject" label="Matéria" 
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Física', label: 'Física'},
              { value: 'Química', label: 'Química'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'História', label: 'História'},
              { value: 'Português', label: 'Português'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Inglês', label: 'Inglês'}
            ]}/>

          <Select name="week_day" 
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            label="Dia da semana" options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}/>
          
          <Input name="time" 
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            type="time" label="Hora"/>
          
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        
        {teachers !== [] && teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id}
              id={teacher.id}
              name={teacher.name} 
              avatar={teacher.avatar} 
              subject={teacher.subject} 
              bio={teacher.bio} 
              cost={teacher.cost} 
              whatsapp={teacher.whatsapp}/>
          );
        })}
      </main>
    </div>
  );
}

export default TeacherList;