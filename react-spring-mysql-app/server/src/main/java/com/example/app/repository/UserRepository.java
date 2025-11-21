import org.springframework.data.jpa.repository.JpaRepository;
import com.example.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Additional query methods can be defined here
}