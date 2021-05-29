type _Config = {
    api_url: string;
}

const Config: _Config = {
    api_url: process.env.REACT_APP_API_URL || "",
}

export default Config;