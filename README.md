# 📌 პროექტი: To-Do List App

---

## **მოდული 1 (HTML + CSS საფუძვლები + GitHub + Figma)**  
🎯 მიზანი: შევქმნათ **სტატიკური ბაზისური განლაგება** To-Do List აპლიკაციისთვის.

### დავალებები:
1. **UI დიზაინი Figma-ში**  
   - შექმენი მარტივი დიზაინი (header, input, ღილაკი, სიის კონტეინერი, footer).  
   - საჭიროების შემთხვევაში ექსპორტი.

2. **პროექტის გარემოს შექმნა**  
   - შექმენი GitHub repository სახელით `todo-list-app`.  
   - დაამატე `index.html`, `style.css`, `README.md`.

3. **საბაზისო HTML სტრუქტურა**  
   - დაამატე `<!DOCTYPE html>` და meta ტეგები.  
   - სათაური: `"My To-Do List App"`.  
   - `<body>`-ში:  
     - `<h1>` აპლიკაციის სათაური.  
     - `<form>` + `<input type="text">` ამოცანის შესატანად.  
     - `<button>` ამოსამატებლად.  
     - `<ul>` სიის კონტეინერი.  
     - footer ავტორის ინფორმაციით.  

4. **სემანტიკური ტეგები და ფორმატირება**  
   - გამოიყენე headings (`<h1>`), paragraphs (`<p>`), formatting (`<strong>`, `<em>`).  
   - დაამატე ბმული (`mailto:` footer-ში).  

5. **CSS სტილები**  
   - ნაგულისხმევი სტილების reset.  
   - გამოიყენე **box model**, **display**.  
   - დააყენე შრიფტები (Google Fonts).  
   - დაამატე **Font Awesome** icon (plus ღილაკისთვის).  
   - ღილაკისა და input-ის hover ეფექტები.  

6. **Layout ექსპერიმენტები**  
   - გამოიყენე **Flexbox** form-ში.  
   - გამოიყენე **Grid** task layout-ში.  
   - დაამატე **sticky header**.  

7. **პროექტის ატვირთვა GitHub-ზე**  
   - შეინახე ცვლილებები commit-ით და push-ით.  
   - გააზიარე repository-ს ბმული.  

---

## **მოდული 2 (Responsive + JavaScript საფუძვლები)**  
🎯 მიზანი: To-Do List გახდეს **რესპონსიული** და დაემატოს **პირველი ინტერქტიულობა**.

### დავალებები:
1. **რესპონსიულობა**  
   - დაამატე `@media` queries (mobile, tablet, desktop).  
   - გააკეთე მარტივი navbar.  
   - გამოიყენე responsive checker.  

2. **სოციალური მედიის ოპტიმიზაცია**  
   - დაამატე meta ტეგები (Open Graph: title, description, image).  

3. **JavaScript გარემო**  
   - დააკავშირე `script.js` (`<script defer>`).  

4. **ცვლადები და მონაცემთა ტიპები**  
   - `const` ფორმის ელემენტებისთვის.  
   - `let` დავალებების მასივისთვის.  

5. **პირველი ფუნქციონალი**  
   - ღილაკზე დაჭერისას console.log input value.  
   - `if-else` ცარიელი task-ის შესამოწმებლად.  
   - Alert ცარიელი ველის შემთხვევაში.  

6. **მასივები და ლუპები**  
   - შეინახე task-ები მასივში.  
   - გამოიყენე loop და array methods.  

7. **დინამიკური ჩვენება**  
   - გამოიყენე `.innerHTML` `<li>`-ს შესაქმნელად.  
   - გამოიყენე template literals.  

---

## **მოდული 3 (Functions + DOM + Events)**  
🎯 მიზანი: To-Do List აპლიკაცია გახდეს **სრულად ფუნქციონალური**.

### დავალებები:
1. **ფუნქციების გამოყენება**  
   - `addTask()` ფუნქცია.  
   - `renderTasks()` ფუნქცია სიის განახლებისთვის.  

2. **Arrow functions და scope**  
   - გამოიყენე arrow function `renderTasks`-ისთვის.  
   - ახსენი local და global scope.  

3. **ES6 შესაძლებლობები**  
   - **spread operator** task-ების კოპირებისთვის.  
   - **destructuring** ობიექტებისა და მასივებისთვის.  

4. **DOM მანიპულაცია**  
   - გამოიყენე `querySelector`, `createElement`, `setAttribute`.  

5. **ღონისძიებები (Events)**  
   - form submit-ზე `preventDefault`.  
   - delete ღილაკი `<li>`-ში task-ის წასაშლელად.  

6. **Async vs Defer**  
   - დაამატე `<script async>` და `<script defer>` და შეადარე.  

---

## **მოდული 4 (Advanced JS + OOP + Storage)**  
🎯 მიზანი: დაემატოს **გაფართოებული ფუნქციები** (ანიმაცია, ფილტრი, შენახვა).

### დავალებები:
1. **Burger menu ანიმაციით**  
   - დაამატე მობილური ვერსიის მენიუ.  

2. **გაფართოებული კონცეფციები**  
   - `setTimeout` – "Task added!" შეტყობინება.  
   - Promise + async/await (სიმულირებული API).  

3. **დამატებითი ფუნქციები**  
   - ფილტრი (search bar).  
   - slider (მაგ., ციტატები).  
   - ფორმის ვალიდაცია (3+ სიმბოლო).  

4. **Regex**  
   - ვალიდაცია სიმბოლოების გარეშე.  

5. **კლასები და ობიექტები**  
   - `Task` კლასი (id, title, completed).  
   - Setters/getters.  
   - `instanceof` შემოწმება.  

6. **მონაცემების შენახვა**  
   - **localStorage** – დავალებების შენახვა.  
   - “Clear All Tasks” ღილაკი.  

7. **სტილი და ანიმაცია**  
   - CSS transitions და `@keyframes`.  
   - CSS variables (dark/light mode toggle).  

8. **დასრულება**  
   - Deploy GitHub Pages-ზე.  
   - README სქრინშოტებით.  

---
