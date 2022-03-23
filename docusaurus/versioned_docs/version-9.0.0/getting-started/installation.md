---
id: installation
title: Installation
sidebar_label: Installation
---

## Install package

### NPM

```bash
npm install ngx-form-object --save
```

### Yarn

```bash
yarn add ngx-form-object
```

## Import module
To start using **ngx-form-object** you have to import `NgxFormObjectModule` into the root module of your project.

```js
...
import { AppComponent } from './app.component';
import { NgxFormObjectModule } from 'ngx-form-object';
...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxFormObjectModule
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
