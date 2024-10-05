<script>

</script>

<template>
    <div class="header">
        <div class="title">
            <a href="#">
                MiniBlog
            </a>
        </div>
        <div>
            <ul>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#">
                        Tech
                    </a>
                </li>
                <li>
                    <a href="#">
                        Entertainment
                    </a>
                </li>
                <li>
                    <a href="#">
                        Travel
                    </a>
                </li>
                <li>
                    <a href="#">
                        Sport
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    .title {
        font-size: x-large;
        margin: auto 0;
    }
    .header {
        background-color: white;
        display: flex;
        padding: 20px 40px;
        justify-content: space-between;
    }
    ul {
        font-size: larger;
        gap: 15px;
        display: flex;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        border-bottom: 1px black solid;
    }
</style>
