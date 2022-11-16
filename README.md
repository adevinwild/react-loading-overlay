
# React Loading Overlay

*React Loading Overlay* is a **lightweight**, **reliable** and has an **all-purpose design**. You can use it to **display a loading screen** to your users when an **action is in progress**.
## About it

- 🕊 Lightweight (Bundlephobia [1.2kb](https://bundlephobia.com/package/@horhorou/react-loading-overlay@0.1.1))
- 📦 No dependencies
- ⚡ Easy to use
- 🧪 Tested
- 🛠 Made with TypeScript

---

## Installation


⬇ **Install it now with NPM**

```bash
    npm install @horhorou/react-loading-overlay
```


⬇ **Or with YARN**

```bash
    yarn add @horhorou/react-loading-overlay
```

---


## Usage / Examples

```js

const App = () => {

    const [ isLoading , setLoading ] = useState(false)

    return(
        <div style={{ position:"relative" }}>
            <LoadingOverlay visible={isLoading}>

            // ...

        </div>
    )

}

```



## License

[MIT](https://choosealicense.com/licenses/mit/)
