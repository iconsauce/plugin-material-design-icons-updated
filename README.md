# @iconsauce/material-design-icons-updated

This plugin scrapes [Google Material Design Icons](https://fonts.google.com/icons) collected by [material-design-icons-updated](https://github.com/stramel/material-design-icons-updated) which contains svg versions.

To use it with `iconsauce`:

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/material-design-icons-updated'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const MyComponent = () => {

  const icon = 'miu/filled/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 miu/filled/add-chart tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="miu/filled/info"/>
      <span className='bg-adjust-tone-01/24 miu/filled/error'/>
      <div>
        <footer title="miu/filled/close"></footer>
      </div>
    </div>
  </section>
}
export default MyComponent
```

This plug-in will generate only icons used:

```css
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,A...Z") format("truetype");
}

[class^="miu/"], [class*=" miu/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.miu\/filled\/add-chart::before { content: "\ea02" }
.miu\/filled\/close::before { content: "\ea03" }
.miu\/filled\/error::before { content: "\ea04" }
.miu\/filled\/info::before { content: "\ea05" }
.miu\/filled\/warning::before { content: "\ea08" }
```
