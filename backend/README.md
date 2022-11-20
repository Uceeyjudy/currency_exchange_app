# BACKEND

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need `python@3.8` installed on your system to run the project.

## SETUP

- Clone the repo
  `git clone https://github.com/workshopapps/realxchangerate.web.git`

- Checkout to the task branch `git checkout -b <NAME_OF_THE_TASK>`

- Run: `git pull origin dev`

- change directory to backend folder `cd backend`

- Run the following commands

### Installing

Run the following command to install all the project dependencies.

```python
# macOS and linuxOS
python3 -m venv venv

# windowsOS using python alias
py -m venv venv

# activate on macOS and linuxOS
source venv/bin/activate

# activate on Windows (cmd.exe)
venv\Scripts\activate.bat

# activate on Windows (PowerShell)
venv\Scripts\Activate.ps1

pip3 install -r requirements.txt

uvicorn app.main:app --reload

```

### Running

After all the above mentioned steps, you can start the application using the following command:

```shell script
uvicorn app.main:app --reload
```

The application will be available at http://localhost:8000.

## Development

These instructions will provide you some useful information on developing this application.

## Testing

The application unit tests are inside the `app/tests` module.

Run the following command in the terminal to execute the application unit tests.

```shell script
pytest app/tests
```
