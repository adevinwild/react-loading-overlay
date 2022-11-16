
# React Loading Overlay

*React Loading Overlay* is a **lightweight**, **reliable** and has an **all-purpose design**. You can use it to **display a loading screen** to your users when an **action is in progress**.
## About it

- 🕊 Lightweight
- ⚡ Easy to use
- 🧪 Tested
- 🛠 Made with TypeScript


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
