## π κΈ°λ₯ μκ΅¬ μ¬ν­

λ°°λ¬μ΄κ° μ’μνλ 369κ²μμ νκ³ μ νλ€. λμ΄λ²μ 1λΆν° μ«μλ₯Ό νλμ© λλ©΄μ, 3, 6, 9κ° λ€μ΄κ°λ μ«μλ μ«μλ₯Ό λ§νλ λμ  3, 6, 9μ κ°μλ§νΌ μλΌμ μ³μΌ νλ€.

μ«μ numberκ° λ§€κ°λ³μλ‘ μ£Όμ΄μ§ λ, 1λΆν° numberκΉμ§ μλΌμ λͺ λ² μ³μΌ νλμ§ νμλ₯Ό return νλλ‘ solution λ©μλλ₯Ό μμ±νλΌ.

### μ νμ¬ν­

- numberλ 1 μ΄μ 10,000 μ΄νμΈ μμ°μμ΄λ€.

### μ€ν κ²°κ³Ό μμ

| number | result |
| --- | --- |
| 13 | 4 |
| 33 | 14 |


------------------------------
## [μμ±μ] : κΉλμ°(DongWooKim97)
</br> 

## π κ΅¬νν  κΈ°λ₯ λͺ©λ‘
</br> 

### βοΈ κΈ°λ₯ 1. μλ ₯κ°μ λν μ ν¨μ± λ° μλ¬(μμΈμ²λ¦¬) κ²μ¬
<br>

  - μλ ₯κ°μ μλ¬κ° μλμ§, μλ ₯ μμμ΄ μ ν¨νμ§ κ²μ¬νμ§ κ²μ¬  
  - ```checkInputValid()```ν¨μμμ μ²΄ν¬. μ€λ₯λ° κ²μ¦ μ€ν¨ -> ```return true```


    - μ²μμΌλ‘ λμ€λ '3' μ΄μ μ μ«μμΈμ§ νμΈ
      - 3,6,9μ μ«μλ₯Ό μΉ΄μ΄νΈνλ λ¬Έμ μ΄κΈ°μ, κ·Έ μ  μ«μλ λΉμ°νκ² ```0```
    
        ```javascript 
          if(!Number.isInteger(number)) return true;
        ```
        
  - ### ```checkInputValid()```μ λ¦¬ν΄κ°μ΄ trueλ©΄ , μ«μ 3 μ΄νμ μ«μμΌ λ   ```retrun 0```
  
    
</br>

### βοΈ κΈ°λ₯ 2. μ£Όμ΄μ§ μ«μλ§νΌμ κΈΈμ΄μ λ°°μ΄μ λ§λλ ν¨μ μμ±
<br>

- μλ ₯κ°μ μ«μλ‘ μ£Όμ΄μ§λ©°, 1λΆν° ν΄λΉ μ«μκΉμ§μ [3,6,9]κ° ν¬ν¨λ κ°μλ₯Ό κ΅¬νλ λ¬Έμ 
- λ°λΌμ μ£Όμ΄μ§ κ° κΉμ§μ λμ΄λ μ«μκ° νμλ‘ν¨ -> ```Array(number).fill(0)```
  - μ΄ ν¨μλ₯Ό ν΅ν΄, numberμ μλ§νΌ λ°°μ΄ μμ΄νμ 0μΌλ‘ μ±μ°λ ν¨μ.

<br>

### βοΈ κΈ°λ₯ 3. λ§λ€μ΄μ§ λΉ λ°°μ΄μ κ°μ 1λΆν° μλ ₯κ°κΉμ§ μ±μ°λ ν¨μ μμ±
<br>

- ```Array(number).fill(0)```μ ν΅ν΄ 0μΌλ‘ μ±μμ§ κΈΈμ΄κ° μλ ₯κ°μΈ λ°°μ΄μ΄ λ§λ€μ΄μ§
- μ¬κΈ°μ κ°μ λ³κ²½νκΈ° μν΄ ```map((_, index) => String(index + 1))``` μ¬μ©.
  - βοΈ mapν¨μμμ ```map((_, index) => ~~~)``` λμ°κΈ° μλ¦¬μ ```(_,index)```λ₯Ό μ¬μ©ν μ΄μ λ<br>
  λμ°κΈ°λ₯Ό μ΄μ©νμ¬ κ° λ³κ²½μ΄ μλ ν΄λΉ λ°°μ΄μ μΈλ±μ€κ°μ μ΄μ©ν΄ κ°μ λ³κ²½νκΈ° μν΄ μ¬μ©β
- λν ```String(index + 1)```μ ν΅ν΄ ν΄λΉ μΈλ±μ€κ°μ ```+1```μ ν ν, λ¬Έμμ΄λ‘ λ³κ²½νμ¬ λ¦¬ν΄.

<br>


### βοΈ κΈ°λ₯ 4. μ κ·μμ μ΄μ©νμ¬ 3,6,9μ ν΄λΉνλ μ«μλ₯Ό '@'λ‘ μΉν
<br>

- ```const regEx = /[369]/g```λΌλ λ³μλ₯Ό μμ±νμ¬ μ κ·μμ μ΄μ©.
```javascript
  map((v) => v.replace(regEx, '@'))
```
- 1λΆν° μλ ₯κ° κΉμ§μ μ«μ λμ΄μ μ΄λ£¬ λ°°μ΄μ mapν¨μλ₯Ό μ΄μ©ν΄ 3,6,9μ κ°μλ₯Ό μΉ΄μ΄ν.
```
  π€·π½ μ κ·μμ΄ λ¬΄μμ΄κ³  , μ΄λ»κ² μ¬μ©νκ±΄κ°μ?

  ππ½ μ κ· ννμμ λ¬Έμμ΄μ λνλ νΉμ  λ¬Έμ μ‘°ν©κ³Ό λμμν€κΈ° μν΄ μ¬μ©λλ ν¨ν΄μλλ€.
      κΈ°λ³Έμ μΌλ‘ `/~~/` μμ λ€μ΄κ°λ λ¬Έμλ€μ ν¬ν¨μν€λ λ¨μ΄λ€μλλ€. 
      λν `/[]/`, []μμ λ€μ΄κ°λ λ¬Έμλ€μ λ¬ΈμμμΌλ‘ κ΄νΈμμ μ΄λ ν λ¬Έμμλ λμνλ κ²λ€ μλλ€. 
      λ§μ§λ§μΌλ‘ `/[369]/g`, gλ μ μ²΄ λ¬Έμμ΄μ νμν΄μ λͺ¨λ  μΌμΉλ₯Ό λ°ννλλ‘ μ§μ νλ μ μ­ νμ νλκ·Έμλλ€ 
```
- λ°λΌμ mapν¨μλ₯Ό ν΅ν΄ vλΌλ μμ΄νμ μμμμ [3,6,9]μ λμνλ μμ΄νμ μ°Ύκ³ , μ΄λ€μ '@'λ‘ λμ²΄.

<br>

### βοΈ κΈ°λ₯ 4. @ν¬ν¨ νλ λ°°μ΄μ λΆλ¦¬νλ κΈ°λ₯ 
<br>

- κΈ°λ₯ 3λ²μ ν΅ν΄ '@'λ‘ μΉνλ μ«μλ€μ λ°°μ΄μ μμ΄νμΌλ‘ κ·Έλλ‘ μ‘΄μ¬.
- κ·Έλ κΈ°μ '@'κ° ν¬ν¨λ μμ΄νλ€λ§ ```filter()```λ₯Ό ν΅ν΄ κ΅¬λΆ / λΆλ¦¬.

<br>

### βοΈ κΈ°λ₯ 5. λΆλ¦¬ν λ°°μ΄λ€μ λΆμΈ λ€μ @λ§ λ¨κ²¨μ Έμλ λ°°μ΄μ μμ±
<br>

- ```join('')```μ ν΅ν΄, λΆλ¦¬λ λ°°μ΄μ νλμ Stringκ°μΌλ‘ μ΄μ΄ λΆμ
- λν μ΄μ΄λΆμΈ λ¬Έμμ΄μ ```match(/@/g)```λΌλ ν¨μλ₯Ό μ΄μ©νμ¬ '@'λ§ ν¬ν¨λ λ°°μ΄μ λ§λ¬
  -> μ΄ κΈΈμ΄λ₯Ό κ΅¬νλ©΄ 1λΆν° μλ ₯κ°κΉμ§ [3,6,9] κ°μλ₯Ό κ΅¬ν  μ μλ€.

#### <λ¬Έμ μ μ‘°κ±΄μ¬ν­μ μ μλ μλ ₯κ°μ λν μμΈλ μ½λ μμ±μ΄ λΆνμνλ€ νλ¨νμ¬ μ­μ νμμ΅λλ€.>