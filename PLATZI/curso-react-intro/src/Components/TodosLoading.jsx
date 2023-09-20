import React from 'react';
import './styles/TodosLoading.css';

export const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
    <span
    className='LoadingTodo-completeIcon'>
    </span>
    <p className='LoadingTodo-text'></p>
    <span
    className='LoadinTodo-deleteIcon'></span>
  </div>
  );
}
