# plugin-material-design-icons-updated

This plugin scrapes [Google Material Design Icons](https://fonts.google.com/icons) collected by `material-design-icons-updated` node module which contains svg versions.

To use it with `iconsauce`:

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/plugin-material-design-icons-updated'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const Component = () => {

  const icon = 'gm/filled/warning'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 gm/filled/add-chart tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="gm/filled/info"/>
      <span className='bg-adjust-tone-01/24 gm/filled/error'/>
      <div>
        <footer title="gm/filled/close"></footer>
      </div>
    </div>
  </section>
}
export default Component
```

This plug-in will generate only icons used:

```css
@font-face {
  font-family: "iconsauce";
  src: url(data:font/truetype;charset=utf-8;base64,AA...AA);
}
[class^="gm/"],
[class*=" gm/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
}
.gm\/filled\/add-chart::before { content: "\ea02"; }
.gm\/filled\/close::before { content: "\ea03"; }
.gm\/filled\/error::before { content: "\ea04"; }
.gm\/filled\/info::before { content: "\ea05"; }
.gm\/filled\/warning::before { content: "\ea08"; }
```
