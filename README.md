"# AWS-project" 

### 프로젝트 시작

1. 깃허브 연동 오류
    - 문제 : remote: Permission to ...
    - 해결 : 이미 계정이 등록되어 있다면 계정을 업데이트 해야 한다.
    ##### 잘못된 방법
    ```
    git config user.name "pukkok"
    git config user.email "krystalgggg@gmail.com"
    ```

    <br>
    ##### 해결 방법
    ```
    git config credential.username "pukkok"
    git config credential.useremail "krystalgggg@gmail.com"
    ```

2. weppack