## π κΈ°λ₯ μκ΅¬ μ¬ν­

μ°μννν¬μ½μ€μμλ κ΅μ‘μ(μ΄ν ν¬λ£¨) κ° μν΅ μ λλ€μμ μ¬μ©νλ€. κ°νΉ λΉμ·ν λλ€μμ μ νλ κ²½μ°κ° μλλ°, μ΄λ¬ν  κ²½μ° μν΅ν  λ νΌλμ λΆλ¬μΌμΌν¬ μ μλ€.

νΌλμ λ§κΈ° μν΄ ν¬λ£¨λ€μ λλ€μ μ€ **κ°μ κΈμκ° μ°μμ μΌλ‘ ν¬ν¨** λ  κ²½μ° ν΄λΉ λλ€μ μ¬μ©μ μ ννλ € νλ€. μ΄λ₯Ό μν΄ κ°μ κΈμκ° μ°μμ μΌλ‘ ν¬ν¨λλ λλ€μμ μ μ²­ν ν¬λ£¨λ€μκ² μλ €μ£Όλ μμ€νμ λ§λ€λ €κ³  νλ€.


μ μ²­λ°μ λλ€μ μ€ **κ°μ κΈμκ° μ°μμ μΌλ‘ ν¬ν¨** λλ λλ€μμ μμ±ν μ§μμμ μ΄λ©μΌ λͺ©λ‘μ return νλλ‘ solution λ©μλλ₯Ό μμ±νλΌ.

### μ νμ¬ν­

- λ κΈμ μ΄μμ λ¬Έμκ° μ°μμ μΌλ‘ μμμ λ§μΆμ΄ ν¬ν¨λμ΄ μλ κ²½μ° μ€λ³΅μΌλ‘ κ°μ£Όνλ€.
- ν¬λ£¨λ 1λͺ μ΄μ 10,000λͺ μ΄νμ΄λ€.
- μ΄λ©μΌμ μ΄λ©μΌ νμμ λΆν©νλ©°, μ μ²΄ κΈΈμ΄λ 11μ μ΄μ 20μ λ―Έλ§μ΄λ€.
- μ μ²­ν  μ μλ μ΄λ©μΌμ `email.com` λλ©μΈμΌλ‘λ§ μ ννλ€.
- λλ€μμ νκΈλ§ κ°λ₯νκ³  μ μ²΄ κΈΈμ΄λ 1μ μ΄μ 20μ λ―Έλ§μ΄λ€.
- resultλ μ΄λ©μΌμ ν΄λΉνλ λΆλΆμ λ¬Έμμ΄μ μ€λ¦μ°¨μμΌλ‘ μ λ ¬νκ³  μ€λ³΅μ μ κ±°νλ€.

### μ€ν κ²°κ³Ό μμ

| forms | result |
| --- | --- |
| [ ["jm@email.com", "μ μ΄μ "], ["jason@email.com", "μ μ΄μ¨"], ["woniee@email.com", "μλ"], ["mj@email.com", "μ μ μ΄"], ["nowm@email.com", "μ΄μ μ "] ] | ["jason@email.com", "jm@email.com", "mj@email.com"] |

------------------------------
<br>

## [μμ±μ] : κΉλμ°(DongWooKim97) 
</br> 

## π κ΅¬νν  κΈ°λ₯ λͺ©λ‘
</br> 

</br> 

### βοΈ κΈ°λ₯ 1. nicknameListλ₯Ό μννλ©° μ€λ³΅κ°μ κ²μ¬νλ κΈ°λ₯ μΆκ°
<br>

  - forms(μλ ₯κ°)λ‘ λΆν° μ΄λ©μΌμ λλ€μμ λΆλ¦¬νμ¬ λ°λ‘ μ μ₯ / ```const emailList``` μ ```const nicknameList```

  - μ°μ  for-loopμ μ΄μ©νμ¬, ```nicknameList```λ₯Ό μ μ²΄ μννλ μμμ νλ€.
    - ```for (let i = 0; i < nicknameList.length; i++)```
    - μ¬κΈ°μ μ μ²΄μνλ₯Ό νλ μ΄μ  β λͺ¨λ  μΈλ±μ€μ λλ€μλ€μ΄ μ€λ³΅κ°μ΄ μλμ§ νμΈν΄μΌ νκΈ° λλ¬Έ βοΈ

<br>

  - μ²« forλ¬Έ λ΄λΆμ forλ¬Έμ νλ λ λ§λ λ€.  -> ```for (let j = 0; j <= nicknameList[i].length - 2; j++)```
  - λ λ²μ§Έ λ°λ³΅λ¬Έμ μ²« λ°λ³΅λ¬Έμμ λ°λΌλ³΄κ³  μλ μΈλ±μ€μ κ°μ ```slice()```νμ¬ μ€λ³΅κ° νμΈνλ μ©λ.
    - λ¬Έμ μμ, λ κΈμ μ΄μμ μ€λ³΅λ λλ€μμ΄ μλμ§ νμΈνλΌκ³  λͺμ βοΈ
    - λν ```nicknameList```λ₯Ό λ§λ€ λ λλ€μμ κΈΈμ΄λ‘ μ€λ¦μ°¨μ νκΈ°μ ```nicknameList```μ λ§¨ μ μμλ μ μΌ κΈΈμ΄κ° μ§§μ μμ βοΈ

<br>


  - λλ²μ§Έ λ°λ³΅λ¬Έ λ΄λΆμ λ§μ§λ§ forλ¬Έμ λ§λ λ€.  -> ```for (let k = 0; k < nicknameList.length; k++)```
    - λ§μ§λ§ λ°λ³΅λ¬Έμ μ²« λ°λ³΅λ¬Έμμ κ°μ Έμ¨ μΈλ±μ€μ λ λ²μ§Έ λ°λ³΅λ¬Έμ ν΅ν΄ ν΄λΉ μΈλ±μ€μ μλΌλΈ λ¬Έμμ΄μ λΉκ΅νλ κ³Όμ μ΄λ€.
      - μ΄ λ°λ³΅λ¬Έμ μ μ²΄λ₯Ό μννλ μ΄μ  β λͺ¨λ  μΈλ±μ€μ λλ€μλ€μ΄ μλΌλΈ λ¬Έμμ΄μ΄ ν¬ν¨λμ΄ μλμ§ νμΈνκΈ° μν΄ βοΈ
    - μ¦, μλΌλΈ λ¬Έμμ΄μ΄ ν¬ν¨λμ΄ μλ μΈλ±μ€λ λλ€μμ΄ μ€λ³΅λμλ€κ³  νλ¨ βοΈ 
    - ```dupliceCrewEmail.push(emailList[k])``` --> ν΄λΉνλ μΈλ±μ€κ° μλΌλΈ λ¬Έμμ΄μ΄ μ€λ³΅λμκΈ° λλ¬Έμ μ΄λ©μΌμ μλ‘ μμ±ν λ°°μ΄μ ```push```νλ€.

    - μ¬κΈ°μ ```i !== k```λ₯Ό μ‘°κ±΄μμΌλ‘ λλ μ΄μ  β iμ kκ° κ°μ κ³³μ λ°λΌλ³΄λ©΄, μμ μ μλΌλΈ λ¬Έμμ΄μ μκΈ° μμ κ³Ό λΉκ΅νλ©΄ λ¬΄μλ―ΈνκΈ° λλ¬Έ βοΈ



      ```javascrpit
      for (let i = 0; i < nicknameList.length; i++) {
        for (let j = 0; j <= nicknameList[i].length - 2; j++) {
          const headSliceWord = nicknameList[i].slice(0 + j, leastDuplicateWord + j);
          for (let k = 0; k < nicknameList.length; k++) {
            if ((i !== k) && (nicknameList[k].includes(headSliceWord))) duplicateCrewEmail.push(emailList[k]) }}}
      
      ```

<br>

#### <λ¬Έμ μ μ‘°κ±΄μ¬ν­μ μ μλ μλ ₯κ°μ λν μμΈλ μ½λ μμ±μ΄ λΆνμνλ€ νλ¨νμ¬ μ­μ νμμ΅λλ€.>