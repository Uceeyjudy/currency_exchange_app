#!/usr/bin/env python3
from deps import get_location


if __name__ == "__main__":
    # test nigeria ip
    print(get_location("102.216.201.112"))
    # test usa ip
    print(get_location("204.44.112.40"))
