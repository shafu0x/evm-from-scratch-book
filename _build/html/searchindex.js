Search.setIndex({"docnames": ["02_a_gas", "02_stack", "03_memory", "04_storage", "05_1_state", "05_opcodes", "06_stop", "07_math", "08_comparisions", "09_logic", "10_bit", "11_misc", "12_environment", "13_pop", "14_memory", "15_storage", "16_jump", "17_push", "18_dup", "19_swap", "20_log", "21_contract", "24_evm", "25_bytecode", "26_run", "99_conclusion", "intro"], "filenames": ["02_a_gas.ipynb", "02_stack.ipynb", "03_memory.ipynb", "04_storage.ipynb", "05_1_state.ipynb", "05_opcodes.ipynb", "06_stop.ipynb", "07_math.ipynb", "08_comparisions.ipynb", "09_logic.ipynb", "10_bit.ipynb", "11_misc.ipynb", "12_environment.ipynb", "13_pop.ipynb", "14_memory.ipynb", "15_storage.ipynb", "16_jump.ipynb", "17_push.ipynb", "18_dup.ipynb", "19_swap.ipynb", "20_log.ipynb", "21_contract.ipynb", "24_evm.ipynb", "25_bytecode.ipynb", "26_run.ipynb", "99_conclusion.ipynb", "intro.ipynb"], "titles": ["Gas", "Stack", "Memory", "Storage", "EVM State", "Opcodes", "Stop", "Math", "Comparisons", "Logic", "Bit", "Misc", "Environment", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "EVM", "Bytecode", "&lt;no title&gt;", "Resources", "Introduction"], "terms": {"The": [1, 2, 3, 4, 7, 11, 22, 23, 26], "veri": [0, 1, 5, 6, 8, 9, 11, 26], "simpl": [1, 2, 6, 26], "data": [1, 4, 20], "structur": [1, 5], "It": [0, 1, 2, 3, 4, 7, 11, 22, 23, 26], "list": [1, 2, 23, 26], "one": [1, 4, 5, 7, 8, 10, 11, 14, 22, 23, 24], "restrction": 1, "you": [0, 1, 7, 9, 12, 23, 25, 26], "can": [1, 2, 3, 4, 5, 11, 12, 16, 23, 26], "onli": [1, 11, 12, 16, 26], "directli": [1, 7, 11, 26], "interact": [1, 26], "top": 1, "push": [1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 22], "new": [1, 26], "valu": [0, 1, 2, 3, 7, 8, 10, 11, 12, 14, 15, 17, 18, 20, 22], "pop": [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22], "an": [0, 1, 2, 3, 4, 5, 7, 11, 14, 16, 26], "alreadi": [1, 4, 26], "exist": 1, "from": [1, 2, 3, 7, 10, 22, 26], "A": [1, 2, 3, 4, 5, 11, 14, 26], "plate": 1, "good": [1, 26], "metaphor": 1, "add": [1, 2, 5, 7, 22, 26], "remov": 1, "work": [0, 1, 7, 26], "exact": 1, "same": [1, 9, 10, 11], "wai": [1, 2, 11], "evm": [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25], "ha": [0, 1, 5, 11, 12, 26], "maximum": 1, "capac": 1, "1024": 1, "item": 1, "everi": [1, 3, 5, 11, 26], "max": 1, "256": [1, 7, 10, 11, 12], "bit": [1, 2, 8, 11, 22, 24], "32": [1, 2, 3, 10, 11, 12, 14], "byte": [1, 2, 3, 5, 7, 12, 14], "maximum_stack_s": 1, "we": [0, 1, 2, 3, 4, 5, 7, 8, 11, 12, 16, 22, 23, 25, 26], "also": [1, 2, 7, 11, 26], "throw": [1, 3, 7], "except": [1, 3, 7, 8, 10, 12, 16, 22, 24], "try": [1, 7], "empti": [1, 2], "class": [1, 2, 3, 4, 20, 22], "def": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24], "__init__": [1, 2, 3, 4, 20, 22], "self": [1, 2, 3, 4, 8, 10, 20, 22, 24], "__str__": [1, 20], "return": [1, 2, 3, 4, 5, 7, 8, 10, 20, 22, 24], "n": [1, 7, 13, 17, 18, 19, 22], "join": [1, 17], "map": [1, 3, 17], "str": [1, 11, 17], "1": [1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24], "len": [1, 2, 12, 22], "rais": [1, 8, 10, 12, 16, 22, 24], "overflow": 1, "append": [1, 2, 3, 12, 17], "0": [1, 2, 3, 4, 7, 8, 10, 12, 15, 16, 19, 20, 21, 22, 24], "underflow": 1, "del": 1, "creat": [1, 2, 5, 11, 26], "3": [1, 2, 7, 8, 9, 10, 12, 17, 18, 19, 20, 22, 24], "2": [1, 2, 7, 10, 12, 13, 16, 20, 22, 24], "4": [1, 2, 20, 22], "print": [1, 22, 24], "typeerror": [1, 8, 10, 22, 24], "traceback": [1, 8, 10, 22, 24], "most": [1, 4, 5, 7, 8, 10, 11, 22, 24, 26], "recent": [1, 8, 10, 22, 24], "call": [1, 5, 8, 10, 11, 22, 23, 24, 25, 26], "last": [1, 8, 10, 12, 22, 24], "var": [1, 8, 10, 22, 24], "folder": [1, 8, 10, 22, 24], "08": [1, 8, 10, 22, 24], "q0syv9y576b_rnls32m9d3nr0000gn": [1, 8, 10, 22, 24], "t": [1, 8, 10, 22, 24, 26], "ipykernel_13808": 1, "1192403925": [1, 22], "py": [1, 8, 10, 22, 24, 25], "cell": [1, 2, 8, 10, 22, 24], "line": [1, 8, 10, 22, 24], "miss": [1, 22], "requir": [1, 22], "posit": [1, 10, 22], "argument": [1, 22], "now": [1, 3, 9, 22, 23], "ar": [0, 1, 4, 5, 7, 9, 11, 14, 22, 23, 25, 26], "left": 1, "each": [2, 5], "access": [2, 3, 11, 12, 20, 21, 25], "individu": 2, "similar": [2, 8], "ram": 2, "start": [2, 26], "being": 2, "complet": [2, 26], "volatil": [2, 3], "which": [2, 4, 22, 26], "mean": [2, 26], "after": [2, 4, 23, 26], "execut": [0, 2, 4, 5, 6, 7, 8, 10, 11, 22, 23, 24, 26], "reset": [2, 22], "hold": 2, "8": [2, 7, 8, 10, 16, 20, 22, 24], "number": [2, 3, 5, 7, 26], "between": 2, "255": 2, "repres": [2, 3, 5, 7], "index": [2, 22], "offset": [2, 11, 12, 14, 20, 21], "would": [2, 7, 11, 23, 26], "get": [2, 10, 19], "store": [0, 2, 3, 4, 12, 14, 15], "combin": [2, 26], "size": [0, 2, 11, 20, 21], "block": [2, 26], "5": [2, 7, 22], "7": [2, 7], "simplememori": 2, "load": [2, 3, 14, 15], "expand": [0, 2], "consum": [2, 4, 7], "ga": [2, 3, 7, 11, 22, 24, 25, 26], "non": [2, 3], "linearli": 2, "make": [2, 4, 5, 16, 18, 23, 26], "more": [2, 3, 7, 23], "costli": 2, "larger": [2, 5], "space": 2, "let": [2, 7, 10, 14], "expans": [2, 20], "calcul": [2, 7, 11], "memory_expansion_cost": [2, 11, 12, 20], "expansion_s": 2, "initi": [2, 3], "zero": 2, "0x00": [2, 3, 12, 26], "_": [2, 17], "rang": [2, 17], "extend": 2, "need": [0, 2, 4, 7, 26], "simplifi": [2, 26], "super": [2, 3], "some": [0, 2, 5, 7, 26], "0x01": [2, 23, 26], "0x02": [2, 26], "0x03": [2, 26], "0x04": [2, 26], "alwai": [2, 12], "thi": [2, 3, 4, 5, 7, 9, 11, 12, 23, 26], "actual": [2, 7, 23], "how": [2, 3, 4, 7, 26], "cost": [2, 3, 7, 20], "calc_memory_expansion_ga": 2, "memory_byte_s": 2, "memory_size_word": 2, "31": [2, 7, 10, 11, 12], "memory_cost": 2, "512": 2, "round": 2, "If": [0, 3, 4, 25, 26], "build": 26, "scratch": [22, 26], "do": [0, 11, 15, 25, 26], "understand": [25, 26], "have": [4, 5, 11, 23, 26], "ever": 26, "whether": [3, 26], "develop": 26, "user": [0, 26], "chanc": 26, "came": 26, "across": 26, "central": 26, "part": [4, 26], "s": [8, 10, 22, 24, 26], "engin": 26, "respons": 26, "program": [0, 7, 11, 12, 16, 23, 26], "smart": [3, 26], "contract": [3, 26], "In": [5, 7, 23, 26], "tutori": 26, "go": [4, 7, 22, 26], "howev": 26, "refer": [25, 26], "implement": [3, 7, 11, 26], "i": [10, 12, 25, 26], "omit": 26, "detail": 26, "believ": 26, "thei": [5, 11, 25, 26], "necessari": 26, "about": [7, 23, 26], "learn": 26, "core": [8, 10, 22, 24, 26], "concept": [0, 9, 10, 26], "first": [3, 6, 7, 26], "principl": 26, "That": [0, 5, 26], "why": [5, 26], "want": 26, "mini": 26, "version": 26, "real": 26, "thing": [5, 25, 26], "virtual": 26, "take": [5, 24, 26], "input": [4, 11, 26], "But": [8, 26], "what": [10, 23, 25, 26], "exactli": [7, 23, 26], "like": [3, 5, 7, 10, 23, 25, 26], "comput": [0, 3, 26], "run": [0, 8, 10, 16, 22, 24, 26], "your": [0, 3, 26], "instead": 26, "separ": 26, "physic": 26, "all": [3, 4, 5, 6, 7, 26], "done": 26, "softwar": 26, "just": [7, 8, 10, 22, 24, 26], "its": [3, 11, 12, 26], "own": 26, "languag": [7, 26], "For": [8, 10, 24, 26], "simpli": [23, 26], "valid": [4, 23, 26], "opcod": [4, 6, 7, 8, 12, 14, 16, 22, 23, 25, 26], "oper": [0, 4, 5, 7, 9, 10, 11, 26], "subtract": [8, 26], "stop": [0, 4, 5, 22, 26], "them": [4, 5, 7, 8, 11, 23, 26], "seen": 26, "tabl": 26, "below": 26, "name": [5, 8, 10, 24, 26], "descript": [5, 26], "halt": [6, 26], "addit": 26, "mul": [5, 7, 26], "multipl": 26, "sub": [5, 7, 26], "div": [5, 7, 26], "integ": 26, "divis": [7, 26], "importantli": 26, "doe": [6, 26], "know": 26, "identifi": [5, 26], "so": [0, 11, 26], "look": [10, 23, 24, 25, 26], "604260005260206000f3": 26, "someth": [3, 26], "could": [0, 11, 23, 26], "interpret": 26, "current": [4, 5, 11, 26], "144": 26, "see": [7, 10, 23, 26], "here": [4, 5, 7, 23, 26], "chang": [4, 11, 26], "time": [3, 11, 26], "fix": [5, 8, 10, 11, 22, 24, 26], "ad": [8, 26], "old": 26, "ones": 26, "deprec": 26, "quit": 26, "frequent": 26, "As": [23, 26], "realli": 26, "don": 26, "write": 26, "slow": 26, "error": 26, "prone": 26, "where": [4, 26], "high": 26, "level": 26, "solidii": 26, "come": 26, "file": [8, 10, 24, 26], "text": 26, "translat": 26, "compil": 26, "said": [3, 26], "target": 26, "special": 26, "compar": [8, 26], "other": [5, 7, 26], "blockchain": 26, "befor": [3, 26], "becaus": [0, 5, 26], "univers": 26, "ture": 26, "ani": [3, 11, 26], "arbitrari": 26, "ignor": 26, "memori": [0, 11, 12, 14, 20, 21, 22, 26], "restrict": 26, "capabl": 26, "script": 26, "NOT": [5, 26], "There": [4, 5, 14, 26], "case": 26, "our": [4, 6, 26], "bottom": 26, "up": [3, 23, 24, 26], "stack": [5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26], "Then": 26, "move": 26, "storag": [0, 15, 22, 26], "built": [11, 23, 26], "end": [7, 26], "us": [5, 7, 8, 10, 11, 14, 23, 24, 26], "import": [0, 7, 11, 14, 26], "live": 26, "total": 26, "isol": 26, "clue": 26, "account": 26, "function": [5, 7, 26], "outsid": 26, "world": 26, "mock": 26, "deliber": 26, "choic": 26, "keep": [3, 4, 26], "python": [8, 10, 11, 22, 24, 26], "hexadecim": [5, 26], "notebook": [5, 26], "avail": 26, "mistak": 26, "pleas": 26, "issu": 26, "github": 26, "even": 26, "better": 26, "pull": 26, "request": 26, "measur": 0, "amount": [0, 3, 22], "arithmet": [0, 5, 7, 8], "ressourc": 0, "limit": 0, "order": 0, "avoid": 0, "ddo": 0, "attack": 0, "exampl": 0, "spend": 0, "hi": 0, "paid": 0, "eth": 0, "out": [0, 22], "while": [0, 22], "bytecod": [0, 4, 11, 22, 24], "kei": [3, 15], "practic": [3, 11], "purpos": 3, "infinit": 3, "ssd": 3, "sourc": [3, 11], "http": 3, "doc": 3, "alchemi": 3, "com": 3, "layout": 3, "dictionari": 3, "keyvalu": 3, "differ": [3, 5, 9], "slot": 3, "wa": [3, 11], "otherwis": 3, "than": [3, 5], "logic": 3, "track": [3, 4], "cach": 3, "when": [3, 4], "save": [3, 4, 14], "true": [3, 4, 6, 21, 22], "els": [3, 7, 8, 10, 12, 15, 16, 24], "fals": [3, 4, 22], "420": 3, "notic": 3, "retriev": 3, "read": 3, "random": [3, 11], "set": [3, 6, 19, 24], "42069": 3, "machin": 4, "ethereum": [4, 11, 12], "manipul": [4, 5, 7], "specif": 4, "point": 4, "next": [4, 22, 23], "And": 4, "area": 4, "dure": [4, 8, 10, 24], "immut": 4, "much": 4, "down": 4, "ether": 4, "wei": 4, "Is": 4, "two": [4, 14], "stop_flag": [4, 6, 21, 22], "revert_flag": [4, 21, 22], "sever": 4, "emit": 4, "result": [4, 7, 8, 10, 22, 23, 24], "insturct": 5, "categori": 5, "deal": 5, "follow": [5, 11], "common": 5, "instanc": 5, "paramet": 5, "uniqu": 5, "convini": 5, "denot": 5, "To": 5, "easier": 5, "give": [5, 12], "short": 5, "found": [5, 8, 10, 24], "0x0": 5, "0x1": 5, "0x2": 5, "0x3": 5, "0x4": 5, "sdiv": [5, 7], "0x5": 5, "mod": [5, 7], "0x6": 5, "smod": [5, 7], "0x7": 5, "addmod": [5, 7], "0x8": 5, "mulmod": [5, 7], "0x9": 5, "exp": [5, 7], "0xa": 5, "signextend": [5, 7], "0xb": 5, "lt": [5, 8], "0x10": 5, "gt": [5, 8], "0x11": 5, "slt": [5, 8], "0x12": 5, "sgt": [5, 8], "0x13": 5, "eq": [5, 8], "0x14": 5, "iszero": [5, 8], "0x15": 5, "AND": 5, "0x16": 5, "OR": 5, "0x17": 5, "xor": 5, "0x18": 5, "0x19": 5, "0x1a": 5, "shl": [5, 10], "0x1b": 5, "shr": [5, 10], "0x1c": 5, "sar": [5, 10], "0x1d": 5, "sha3": [5, 11], "0x20": 5, "address": 5, "0x30": 5, "balanc": 5, "0x31": 5, "origin": 5, "0x32": 5, "caller": [5, 8, 10, 22, 24], "0x33": 5, "callvalu": 5, "0x34": 5, "calldataload": 5, "0x35": 5, "calldatas": 5, "0x36": 5, "calldatacopi": 5, "0x37": 5, "codes": 5, "0x38": 5, "codecopi": 5, "0x39": 5, "gaspric": [5, 12], "0x3a": 5, "extcodes": [5, 12, 25], "0x3b": 5, "extcodecopi": [5, 12], "0x3c": 5, "returndatas": [5, 12], "0x3d": 5, "returndatacopi": [5, 12], "0x3e": 5, "extcodehash": [5, 12], "0x3f": 5, "blockhash": [5, 12], "0x40": 5, "coinbas": 5, "0x41": 5, "timestamp": 5, "0x42": [5, 23], "0x43": 5, "difficulti": 5, "0x44": 5, "gaslimit": 5, "0x45": 5, "chainid": 5, "0x46": 5, "selfbal": 5, "0x47": 5, "basefe": 5, "0x48": 5, "0x50": 5, "mload": [5, 14], "0x51": 5, "mstore": [5, 14], "0x52": 5, "mstore8": [5, 14], "0x53": 5, "sload": [5, 15], "0x54": 5, "sstore": [5, 15], "0x55": 5, "0x56": 5, "jumpi": [5, 16], "0x57": 5, "pc": [5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "0x58": 5, "jumpdest": [5, 16], "0x5b": 5, "push1": [5, 22], "0x60": [5, 23], "push2": 5, "0x61": 5, "push3": 5, "0x62": 5, "push4": 5, "0x63": 5, "push5": 5, "0x64": 5, "push6": 5, "0x65": 5, "push7": 5, "0x66": 5, "push8": 5, "0x67": 5, "push9": 5, "0x68": 5, "push10": 5, "0x69": 5, "push11": 5, "0x6a": 5, "push12": 5, "0x6b": 5, "push13": 5, "0x6c": 5, "push14": 5, "0x6d": 5, "push15": 5, "0x6e": 5, "push16": 5, "0x6f": 5, "push17": 5, "0x70": 5, "push18": 5, "0x71": 5, "push19": 5, "0x72": 5, "push20": 5, "0x73": 5, "push21": 5, "0x74": 5, "push22": 5, "0x75": 5, "push23": 5, "0x76": 5, "push24": 5, "0x77": 5, "push25": 5, "0x78": 5, "push26": 5, "0x79": 5, "push27": 5, "0x7a": 5, "push28": 5, "0x7b": 5, "push29": 5, "0x7c": 5, "push30": 5, "0x7d": 5, "push31": 5, "0x7e": 5, "push32": 5, "0x7f": 5, "dup1": 5, "0x80": 5, "dup2": 5, "0x81": 5, "dup3": 5, "0x82": 5, "dup4": 5, "0x83": 5, "dup5": 5, "0x84": 5, "dup6": 5, "0x85": 5, "dup7": 5, "0x86": 5, "dup8": 5, "0x87": 5, "dup9": 5, "0x88": 5, "dup10": 5, "0x89": 5, "dup11": 5, "0x8a": 5, "dup12": 5, "0x8b": 5, "dup13": 5, "0x8c": 5, "dup14": 5, "0x8d": 5, "dup15": 5, "0x8e": 5, "dup16": 5, "0x8f": 5, "swap1": 5, "0x90": 5, "swap2": 5, "0x91": 5, "swap3": 5, "0x92": 5, "swap4": 5, "0x93": 5, "swap5": 5, "0x94": 5, "swap6": 5, "0x95": 5, "swap7": 5, "0x96": 5, "swap8": 5, "0x97": 5, "swap9": 5, "0x98": 5, "swap10": 5, "0x99": 5, "swap11": 5, "0x9a": 5, "swap12": 5, "0x9b": 5, "swap13": 5, "0x9c": 5, "swap14": 5, "0x9d": 5, "swap15": 5, "0x9e": 5, "swap16": 5, "0x9f": 5, "log0": [5, 20], "0xa0": 5, "log1": [5, 20], "0xa1": 5, "log2": [5, 7, 20], "0xa2": 5, "log3": [5, 20], "0xa3": 5, "log4": [5, 20], "0xa4": 5, "0xf0": 5, "0xf1": 5, "callcod": 5, "0xf2": 5, "legaci": 5, "support": 5, "delegatecal": 5, "0xf3": 5, "0xf4": 5, "create2": 5, "0xf5": 5, "staticcal": 5, "0xfa": 5, "revert": [5, 21], "0xfd": 5, "invalid": 5, "0xfe": 5, "selfdestruct": 5, "0xff": [5, 23], "These": [7, 12], "back": [7, 23], "increment": 7, "counter": [7, 16], "deduct": 7, "b": [7, 8, 9, 16], "gas_dec": [7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22], "One": [7, 14], "interest": 7, "note": [7, 11], "handl": [7, 8, 10, 24], "system": 7, "divid": 7, "Not": 7, "mostli": 7, "featur": 7, "solid": 7, "absolut": 7, "both": [7, 23], "denomin": 7, "numer": 7, "small": 7, "littl": [7, 23], "helper": 7, "determin": 7, "sign": 7, "pos_or_neg": 7, "lambda": [7, 8, 10, 22, 24], "ab": 7, "dynam": 7, "mani": 7, "expon": 7, "binari": [7, 10], "size_in_byt": 7, "bits_need": 7, "ceil": 7, "10": [7, 10, 16], "50": 7, "inform": 7, "rare": 7, "x": [7, 10], "testbit": 7, "sign_bit": 7, "captur": [8, 10, 16, 22, 24], "util": [8, 10, 24], "ipynb": [8, 10, 16, 22, 24], "oserror": [8, 10, 24], "librari": [8, 10, 11, 22, 24], "lib": [8, 10, 22, 24], "site": [8, 10, 22, 24], "packag": [8, 10, 22, 24], "ipython": [8, 10, 22, 24], "magic": [8, 10, 22, 24], "parameter_": [8, 10, 22, 24], "runner": [8, 10, 22, 24], "file_find": [8, 10, 22, 24], "713": [8, 10, 24], "fpath": [8, 10, 24], "arg_lst": [8, 10, 24], "714": [8, 10, 24], "filenam": [8, 10, 22, 24], "715": [8, 10, 24], "indexerror": [8, 10, 24], "path": [8, 10, 24], "get_py_filenam": [8, 10, 24], "force_win32": [8, 10, 24], "108": [8, 10, 24], "109": [8, 10, 24], "ioerror": [8, 10, 24], "r": [8, 10, 24], "110": [8, 10, 24], "abov": [8, 10, 24], "anoth": [8, 10, 23, 24], "occur": [8, 10, 24], "ipykernel_18822": 8, "3891275799": [8, 10], "get_ipython": [8, 10, 22, 24], "run_line_mag": [8, 10, 22, 24], "interactiveshel": [8, 10, 22, 24], "magic_nam": [8, 10, 22, 24], "_stack_depth": [8, 10, 22, 24], "2416": [8, 10, 22, 24], "kwarg": [8, 10, 22, 24], "local_n": [8, 10, 22, 24], "get_local_scop": [8, 10, 22, 24], "stack_depth": [8, 10, 22, 24], "2417": [8, 10, 22, 24], "builtin_trap": [8, 10, 22, 24], "2418": [8, 10, 22, 24], "fn": [8, 10, 22, 24], "arg": [8, 10, 22, 24], "2419": [8, 10, 22, 24], "2420": [8, 10, 22, 24], "decor": [8, 10, 22, 24], "fun": [8, 10, 22, 24], "kw": [8, 10, 22, 24], "230": [8, 10, 22, 24], "kwsyntax": [8, 10, 22, 24], "231": [8, 10, 22, 24], "sig": [8, 10, 22, 24], "232": [8, 10, 22, 24], "func": [8, 10, 22, 24], "extra": [8, 10, 22, 24], "233": [8, 10, 22, 24], "__name__": [8, 10, 22, 24], "234": [8, 10, 22, 24], "__doc__": [8, 10, 22, 24], "f": [8, 10, 20, 22, 24], "k": [8, 10, 22, 24], "185": [8, 10, 22, 24], "overkil": [8, 10, 22, 24], "state": [8, 10, 22, 24, 25], "186": [8, 10, 22, 24], "magic_deco": [8, 10, 22, 24], "187": [8, 10, 22, 24], "188": [8, 10, 22, 24], "189": [8, 10, 22, 24], "callabl": [8, 10, 22, 24], "723": [8, 10, 24], "os": [8, 10, 24], "nt": [8, 10, 24], "re": [8, 10, 24], "match": [8, 10, 24], "724": [8, 10, 24], "warn": [8, 10, 24], "window": [8, 10, 24], "doubl": [8, 10, 24], "quot": [8, 10, 24], "wrap": [8, 10, 24], "mypath": [8, 10, 24], "myfil": [8, 10, 24], "725": [8, 10, 24], "msg": [8, 10, 24], "726": [8, 10, 24], "727": [8, 10, 24], "sy": [8, 10, 24], "meta_path": [8, 10, 24], "rather": 8, "unsigned_to_sign": 8, "cpu": [8, 10, 12, 14, 16, 20], "familiar": 9, "_and": 9, "_or": 9, "_xor": 9, "_not": 9, "ipykernel_18832": 10, "again": 10, "word": [10, 14], "pow": 10, "bin": 10, "22": 10, "0b10110": 10, "0b1011000": 10, "0b101": 10, "1010": 10, "becom": 10, "101000": 10, "uint_255_negative_on": 10, "uint_256_max": 10, "hard": 11, "classifi": 11, "9": 11, "ineffici": 11, "decid": 11, "includ": 11, "itself": 11, "easili": 11, "been": 11, "weather": 11, "should": [11, 14, 23], "precomipl": 11, "matter": 11, "debat": 11, "commun": 11, "cryptograph": 11, "primit": 11, "characterist": 11, "messag": 11, "determinist": 11, "produc": 11, "output": 11, "infeas": 11, "invert": 11, "chaotic": 11, "whole": 11, "toatlli": 11, "extern": 11, "keccak": 11, "minimum_word_s": [11, 12], "dynamic_ga": [11, 12], "6": 11, "todo": [11, 14, 15, 20], "30": 11, "0x414b60745072088d013721b4a28a0559b1a9d213": 12, "99999999999": 12, "2600": 12, "100": [12, 15], "warm": [12, 15, 25], "delta": 12, "calldata": [12, 22], "until": 12, "destoffset": 12, "static_ga": [12, 20], "extcod": 12, "refactor": 12, "seper": 12, "method": 12, "address_access_cost": 12, "returndata": [12, 21, 22], "blocknumb": 12, "0x1cbcfa1ffb1ca1ca8397d4f490194db5fc0543089b9dee43f76cf3f962a185e8": 12, "20": 12, "_pop": 13, "three": 14, "specifi": 14, "allow": 14, "right": 14, "align": 14, "2100": 15, "old_valu": 15, "base_dynamic_ga": 15, "test": 15, "20000": 15, "2900": 15, "access_cost": 15, "refund": [15, 25], "05_opcod": [16, 22], "jump": 16, "sure": [16, 18, 23], "_push": [17, 22], "peek": [17, 22], "int": 17, "_dup": 18, "big": 18, "enough": 18, "_swap": 19, "value1": 19, "value2": 19, "log": [20, 22], "topic1": 20, "none": [20, 22], "topic2": 20, "topic3": 20, "topic4": 20, "calc_ga": 20, "topic_count": 20, "375": 20, "append_log": 20, "memeori": 20, "topic": 20, "02_stack": 22, "03_memori": 22, "04_storag": 22, "06_stop": 22, "07_math": 22, "book": 22, "ipykernel_18893": 22, "35317130": 22, "733": 22, "preserve_kei": 22, "shell": 22, "user_n": 22, "__file__": 22, "734": 22, "735": 22, "safe_execfile_ipi": 22, "raise_except": 22, "736": 22, "737": 22, "fname": 22, "shell_futur": 22, "2903": 22, "run_cel": 22, "silent": 22, "2904": 22, "2905": 22, "raise_error": 22, "2906": 22, "elif": 22, "success": 22, "2907": 22, "break": 22, "347": 22, "error_before_exec": 22, "348": 22, "error_in_exec": 22, "349": 22, "350": 22, "351": 22, "__repr__": 22, "skip": 22, "hidden": 22, "frame": 22, "put": [22, 23], "everyth": 22, "togeth": [22, 23], "tell": 22, "should_execute_next_opcod": 22, "op": 22, "talk": 23, "operand": 23, "simple_push": 23, "0x6042": 23, "consist": 23, "writer": 23, "mix": 23, "von": 23, "neumann": 23, "architectur": 23, "onto": 23, "simple_add": [23, 24], "element": 23, "321": [23, 24], "step": 23, "ipykernel_18903": 24, "1196339088": 24, "21_000": 24, "nameerror": 24, "1728536637": 24, "defin": 24, "consid": 25, "under": 25, "over": 25, "flow": 25, "protect": 25, "cold": 25, "proof": 25, "stake": 25, "static": 25, "deleg": 25, "implemen": 25, "highli": 25, "recommend": 25, "code": 25, "best": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"stack": [1, 4], "memori": [2, 4, 5], "advanc": 2, "introduct": 26, "evm": [4, 22, 26], "virut": 26, "machin": 26, "bytecod": [23, 26], "solid": 26, "vyper": 26, "huff": 26, "ethereum": [5, 26], "vs": [11, 26], "bitcoin": 26, "outlin": 26, "prerequisit": 26, "note": 26, "ga": [0, 4, 12], "storag": [3, 4, 5], "warm": 3, "cold": 3, "state": [4, 5], "program": [4, 22], "counter": [4, 22], "pc": 4, "valu": 4, "calldata": 4, "flag": 4, "returndata": 4, "log": [4, 5], "opcod": [5, 11], "implement": 5, "list": 5, "math": [5, 7], "comparison": [5, 8], "logic": [5, 9], "bit": [5, 10], "op": 5, "misc": [5, 11], "pop": 5, "jump": 5, "push": [5, 23], "dup": 5, "swap": 5, "contract": 5, "stop": 6, "less": 8, "than": 8, "sign": [8, 10], "greater": 8, "equal": 8, "Is": 8, "zero": 8, "And": 9, "Or": 9, "xor": 9, "Not": 9, "byte": 10, "shift": 10, "left": 10, "right": 10, "precompil": 11, "hash": [11, 12], "function": 11, "environ": 12, "address": 12, "balanc": 12, "origin": 12, "caller": 12, "callvalu": 12, "calldataload": 12, "calldatas": 12, "calldatacopi": 12, "codes": 12, "codecopi": 12, "price": 12, "extern": 12, "code": 12, "size": 12, "copi": 12, "return": 12, "data": [12, 23], "block": 12, "coinbas": 12, "simpl": 23, "instruct": 23, "add": 23, "resourc": 25}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})