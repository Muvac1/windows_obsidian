0.1  ``` Auto-updating Homebrew...Adjust how often this is run with HOMEBREW_AUTO_UPDATE_SECS or disable with HOMEBREW_NO_AUTO_UPDATE. Hide these hints with HOMEBREW_NO_ENV_HINTS (see man brew).```
Homebrew 在每次运行时自动更新其库和公式的通知，它并不会影响你安装或使用软件的实际功能。如果你觉得每次使用 Homebrew 时都需要等待更新，可以选择禁用这个自动更新功能，以加快使用速度。
解决方案：
export HOMEBREW_NO_AUTO_UPDATE=1
source ~/.zshrc  # 如果你使用的是 zsh
source ~/.bash_profile  # 如果你使用的是 bash
1. 运行时若环境不为python3.8 报错
	- conda myenv
2.  ```
```
04/08 08:02:53 [ERROR] CUID#7 - Download aborted. URI=https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/pretrained/D32k.pth

Exception: [AbstractCommand.cc:351] errorCode=1 URI=https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/pretrained/D32k.pth

  -> [SocketCore.cc:1022] errorCode=1 SSL/TLS handshake failure: Connection aborte
 ```
  尝试使用 aria2 或类似工具从 Hugging Face 下载文件时，TLS（加密连接）握手失败，下载中止了
 **方法 1：手动下载 放到指定目录**
 **方法 2：给**  **aria2** **设置代理（你当前运行的是它自动调用 aria2）**
如果你已经有代理（如 Clash、V2Ray 等），比如本地是 HTTP 代理 127.0.0.1:7890，你可以临时设置代理：
```
export all_proxy=http://127.0.0.1:7890
sh ./run.sh
```

```
(myenv) ➜  Retrieval-based-Voice-Conversion-WebUI-main brew install ffmpeg

==> Downloading https://formulae.brew.sh/api/formula.jws.json
```
#卡住了
解决方案：conda install -c conda-forge ffmpeg
 Question:brew 下载的依赖是全局的吗 ，mac 的conda下面的虚拟环境使用brew 下载依赖后，系统环境会不会改变?
- brew 下载的依赖是全局的，也就是说，当你使用 Homebrew 安装软件包时，默认情况下它们会安装到 /usr/local 或 /opt/homebrew 目录（取决于你的 macOS 是基于 Intel 还是 M1/M2 芯片）。这些包是针对整个系统的，不仅仅局限于某个特定的 Python 虚拟环境。如果你在一个虚拟环境内使用 brew 安装依赖，它会影响系统环境，因为 brew 默认会将软件安装到全局路径中。所以，理论上，在你的 conda 虚拟环境中使用 brew 不会直接改变虚拟环境的 Python 包依赖，但它可能会影响系统层面的库或工具，尤其是一些命令行工具或者库的版本，可能会对其他应用产生影响。如果你不希望这种情况发生，可以考虑以下两种方法：1. **使用 conda 安装依赖**：如果可以，尽量使用 conda 或 pip 安装与你的 Python 环境相关的依赖，避免使用 brew。2. **使用 brew 的 --prefix 选项**：通过指定一个安装路径，可以避免将软件包安装到全局路径，从而减少对系统环境的影响。你也可以使用 brew 的 --prefix 来指定安装目录，但这通常更多是为了管理 Homebrew 安装的工具，而不是为了 Python 环境。如果你需要某些 brew 安装的工具在虚拟环境中使用，可以将这些工具的路径添加到虚拟环境的 PATH 中，以确保它们不会影响全局环境。