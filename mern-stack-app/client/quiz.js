import React from 'react';

/**
 * * Açıklamalar
 * ? Birden fazla şekilde gelebilecek olan verileri nasıl yöneteceğiz?
 * ? Verileri nasıl alacağız?
 * ? Verileri nasıl göstereceğiz?
 * ? Veriler yüklenirken bir loading ekranı gösterelim.
 * ? Bu verilerimizi bir state olarak tutalım.
 * ? Sayfamız açıldığı zaman veya bir butona tıklandığında verilerimizi çekelim.
 * ? Verilerimizi çektiğimizde loading ekranını kapatıp verilerimizi gösterelim.
 * ? Verilerimizi çekerken bir hata oluşursa kullanıcıya bir hata mesajı gösterelim.
 */

const dataSource = [
  { id: 1, service: 'https://jsonplaceholder.typicode.com/users/1' },
  { id: 2, service: 'https://jsonplaceholder.typicode.com/todos/1' }
];

const Quiz = () => {
  return <div>Quiz</div>;
};

export default Quiz;
