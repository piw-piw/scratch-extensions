class Tabs {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Tabs",
            "name": "Tabs",
            "blocks": [
                        {
                            "opcode": "openURL",
                            "blockType": "command",
                            "text": "open [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://scratch.mit.edu"
                                },
                            }
                        }
                ],
        };
    }
    
    openURL({url}) {
        window.open("url")
    }
}

Scratch.extensions.register(new Tabs())